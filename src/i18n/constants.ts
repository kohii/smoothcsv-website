export const languageList = [
	"en",
	"zh-cn",
	"fr",
	"it",
	"es",
	"ja",
	"de",
	"ru",
	"ko",
	"pt",
] as const;

export type Language = (typeof languageList)[number];

export const languages: Record<Language, string> = {
	en: "English",
	ja: "日本語",
	"zh-cn": "中文(简体)",
	fr: "français",
	it: "italiano",
	es: "español",
	de: "Deutsch",
	ru: "Русский",
	ko: "한국어",
	pt: "Português",
};

export const defaultLang: Language = "en";

export const supportedLanguagesPerPath: Record<string, Language[]> = {
	"/": [...languageList],
	"/blog": ["en", "ja"],
	"/terms": ["en", "ja"],
	"/download": [...languageList],
};
