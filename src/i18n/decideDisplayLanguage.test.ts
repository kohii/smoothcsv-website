import assert from "node:assert";
import { describe, it } from "node:test";
import { decideDisplayLanguage } from "./decideDisplayLanguage";

describe("decideDisplayLanguage", () => {
	it("should return the current language if it is not default", () => {
		assert.equal(
			decideDisplayLanguage(
				"ja",
				["en", "ja"],
				() => undefined,
				() => undefined,
			),
			"ja",
		);
	});
	it("should return the language from the cookie if it is supported", () => {
		assert.equal(
			decideDisplayLanguage(
				"en",
				["en", "ja"],
				() => "ja",
				() => "es",
			),
			"ja",
		);
	});
	it("should return the language from accept-language header if it is supported", () => {
		assert.equal(
			decideDisplayLanguage(
				"en",
				["en", "fr"],
				() => undefined,
				() => "fr",
			),
			"fr",
		);
	});
	it("should return the closest supported language from accept-language header", () => {
		assert.equal(
			decideDisplayLanguage(
				"en",
				["en", "ja"],
				() => undefined,
				() => "it,ja-JP",
			),
			"ja",
		);
	});
	it("should return the default language if accept-language is not supported", () => {
		assert.equal(
			decideDisplayLanguage(
				"en",
				["ja", "fr"],
				() => undefined,
				() => "it,es",
			),
			"en",
		);
	});
});
