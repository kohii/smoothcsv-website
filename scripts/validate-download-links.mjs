#!/usr/bin/env node

/**
 * Validates that all download links on the deployed site are accessible (not 404).
 * This script:
 * 1. Fetches HTML from the deployed site (https://smoothcsv.com)
 * 2. Extracts href attributes from <a> tags with class "download-link"
 * 3. Deduplicates the URLs
 * 4. Checks each URL for 404 errors
 * 5. Exits with error code 1 if any links are broken
 */

const SITE_URL = "https://smoothcsv.com";

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

	// Match <a> tags with class="download-link" and extract href
	// This regex looks for: <a with class containing "download-link" and extracts href
	const regex = /<a[^>]*class="[^"]*download-link[^"]*"[^>]*href="([^"]+)"/g;
	let match;

	while ((match = regex.exec(html)) !== null) {
		links.push(match[1]);
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
