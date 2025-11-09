import assert from "node:assert";
import { describe, it } from "node:test";
import type { Language } from "./constants";
import { decideDisplayLanguage } from "./decideDisplayLanguage";

describe("decideDisplayLanguage", () => {
	it("should return the current language if it is not default", () => {
		const langs: Language[] = ["en", "ja"];
		assert.equal(
			decideDisplayLanguage(
				"ja",
				langs,
				() => undefined,
				() => undefined,
			),
			"ja",
		);
	});
	it("should return the language from the cookie if it is supported", () => {
		const langs: Language[] = ["en", "ja"];
		assert.equal(
			decideDisplayLanguage(
				"en",
				langs,
				() => "ja",
				() => "es",
			),
			"ja",
		);
	});
	it("should return the language from accept-language header if it is supported", () => {
		const langs: Language[] = ["en", "fr"];
		assert.equal(
			decideDisplayLanguage(
				"en",
				langs,
				() => undefined,
				() => "fr",
			),
			"fr",
		);
	});
	it("should return the closest supported language from accept-language header", () => {
		const langs: Language[] = ["en", "ja"];
		assert.equal(
			decideDisplayLanguage(
				"en",
				langs,
				() => undefined,
				() => "it,ja-JP",
			),
			"ja",
		);
	});
	it("should return the default language if accept-language is not supported", () => {
		const langs: Language[] = ["ja", "fr"];
		assert.equal(
			decideDisplayLanguage(
				"en",
				langs,
				() => undefined,
				() => "it,es",
			),
			"en",
		);
	});
});
