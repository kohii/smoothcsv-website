import { defaultLang } from "./constants";

function findSupportedLanguage(
	language: string,
	supportedLanguages: string[],
): string | undefined {
	return supportedLanguages.find((value) => language.startsWith(value));
}

export function decideDisplayLanguage(
	currentLang: string,
	supportedLanguages: string[],
	getLanguageFromCookies: () => string | undefined,
	getAcceptLanguage: () => string | undefined,
) {
	const languageFromCookies = getLanguageFromCookies();

	// 1. Prefer the language set in the cookie
	if (languageFromCookies && supportedLanguages.includes(languageFromCookies)) {
		return languageFromCookies;
	}

	// 2. If the user requests non-default language, do nothing
	if (currentLang !== defaultLang) return currentLang;

	// 3. Detect the language from the accept-language header
	const acceptLanguage = getAcceptLanguage();
	if (!acceptLanguage) return currentLang;

	const acceptLanguages = acceptLanguage.split(",");

	for (const acceptLanguage of acceptLanguages) {
		const language = acceptLanguage.split(";")[0];
		if (!language) continue;
		const supportedLanguage = findSupportedLanguage(
			acceptLanguage,
			supportedLanguages,
		);
		if (supportedLanguage) return supportedLanguage;
	}

	return currentLang;
}
