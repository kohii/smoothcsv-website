#!/usr/bin/env node

/**
 * Validates that all download links on the deployed site are accessible (not 404).
 * This script:
 * 1. Fetches HTML from the download page (https://smoothcsv.com/download)
 * 2. Extracts href attributes from <a> tags with class "download-row"
 * 3. Deduplicates the URLs
 * 4. Checks each URL for 404 errors
 * 5. Exits with error code 1 if any links are broken
 */

const SITE_URL = "https://smoothcsv.com/download";

/**
 * Fetch HTML from a URL
 */
async function fetchHtml(url) {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Failed to fetch ${url}: ${response.status}`);
	}
	return await response.text();
}

/**
 * Extract download links from HTML content using regex
 */
function extractDownloadLinks(html) {
	const links = [];

	// Match all <a> tags and check if they contain "download-row" class
	const anchorRegex = /<a[^>]*>/g;
	let anchorMatch = anchorRegex.exec(html);

	while (anchorMatch !== null) {
		const anchorTag = anchorMatch[0];
		// Check if this anchor tag contains "download-row" class
		if (anchorTag.includes("download-row")) {
			// Extract href from this anchor tag (support both single and double quotes)
			const hrefMatch = anchorTag.match(/href=["']([^"']+)["']/);
			if (hrefMatch && hrefMatch[1]) {
				links.push(hrefMatch[1]);
			}
		}
		anchorMatch = anchorRegex.exec(html);
	}

	return links;
}

/**
 * Check if a URL returns 404
 */
async function checkUrl(url) {
	try {
		const response = await fetch(url, { method: "HEAD" });
		return {
			url,
			ok: response.ok,
			status: response.status,
		};
	} catch (error) {
		return {
			url,
			ok: false,
			error: error.message,
		};
	}
}

async function main() {
	console.log(`🔍 Fetching HTML from ${SITE_URL}...\n`);

	// Fetch HTML from the deployed site
	const html = await fetchHtml(SITE_URL);
	console.log("✅ HTML fetched successfully\n");

	// Extract download links
	const links = extractDownloadLinks(html);

	// Deduplicate links
	const uniqueLinks = [...new Set(links)];
	console.log(`Found ${uniqueLinks.length} unique download link(s):\n`);

	// Error if no download links found
	if (uniqueLinks.length === 0) {
		console.error("❌ No download links found on the page!");
		// Debug: Check if download-row class exists in HTML
		if (html.includes("download-row")) {
			console.error("⚠️  'download-row' class found in HTML, but no links extracted.");
			// Try to find any <a> tags with download-row
			const debugMatches = html.match(/<a[^>]*download-row[^>]*>/g);
			if (debugMatches) {
				console.error(`Found ${debugMatches.length} <a> tag(s) with 'download-row' class:`);
				debugMatches.slice(0, 3).forEach((match, i) => {
					console.error(`  ${i + 1}. ${match.substring(0, 100)}...`);
				});
			}
		} else {
			console.error("⚠️  'download-row' class not found in HTML at all.");
		}
		process.exit(1);
	}

	for (const link of uniqueLinks) {
		console.log(`  - ${link}`);
	}
	console.log();

	// Check each link
	console.log("🌐 Checking URLs...\n");
	const results = await Promise.all(uniqueLinks.map(checkUrl));

	let hasErrors = false;
	for (const result of results) {
		if (result.ok) {
			console.log(`✅ ${result.url} (${result.status})`);
		} else {
			console.error(
				`❌ ${result.url} ${result.error ? `(Error: ${result.error})` : `(Status: ${result.status})`}`,
			);
			hasErrors = true;
		}
	}

	console.log();
	if (hasErrors) {
		console.error("❌ Some download links are broken!");
		process.exit(1);
	}

	console.log("✅ All download links are valid!");
}

main().catch((error) => {
	console.error("Error:", error);
	process.exit(1);
});
