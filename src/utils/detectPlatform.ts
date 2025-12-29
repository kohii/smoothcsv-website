/**
 * Platform detection utilities for download pages
 */

export type OS = "macos" | "windows" | "linux";
export type Arch = "x64" | "arm64";

export interface PlatformInfo {
	os: OS;
	arch: Arch;
}

/**
 * Detects the user's operating system and CPU architecture.
 *
 * Detection methods:
 * 1. Chrome/Edge: User-Agent Client Hints API (most reliable)
 * 2. Safari (macOS): WebGL GPU renderer name detection for Apple Silicon
 * 3. Fallback: User-Agent string parsing for ARM indicators
 *
 * @returns Platform info or null if detection fails
 */
export async function detectPlatform(): Promise<PlatformInfo | null> {
	const ua = navigator.userAgent;

	// Detect OS
	let os: OS | null = null;
	if (ua.includes("Mac")) os = "macos";
	else if (ua.includes("Windows")) os = "windows";
	else if (ua.includes("Linux") && !ua.includes("Android")) os = "linux";

	if (!os) return null;

	// Detect architecture
	let arch: Arch = "x64"; // Default to x64

	// Method 1: User-Agent Client Hints API (Chrome/Edge)
	const userAgentData = (
		navigator as Navigator & {
			userAgentData?: {
				getHighEntropyValues: (
					hints: string[],
				) => Promise<{ architecture?: string }>;
			};
		}
	).userAgentData;

	if (userAgentData?.getHighEntropyValues) {
		try {
			const data = await userAgentData.getHighEntropyValues(["architecture"]);
			if (data.architecture === "arm") arch = "arm64";
		} catch {
			// Fall through to other detection methods
		}
	}
	// Method 2: Safari - Detect Apple Silicon via WebGL GPU renderer
	else if (os === "macos") {
		try {
			const canvas = document.createElement("canvas");
			const gl = canvas.getContext("webgl");
			if (gl) {
				const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
				if (debugInfo) {
					const renderer = gl.getParameter(
						debugInfo.UNMASKED_RENDERER_WEBGL,
					);
					// Apple M1/M2/M3/M4 chips
					if (typeof renderer === "string" && renderer.includes("Apple M")) {
						arch = "arm64";
					}
				}
			}
		} catch {
			// Fall through to default
		}
	}
	// Method 3: Check User-Agent for ARM indicators (Windows/Linux ARM)
	else if (ua.includes("ARM64") || ua.includes("aarch64")) {
		arch = "arm64";
	}

	return { os, arch };
}
