import { getRelativeLocaleUrl as getRelativeLocaleUrlAstro } from "astro:i18n";
import {
	defaultLang,
	type Language,
	supportedLanguagesPerPath,
} from "./constants";
import { ui } from "./ui";

export function getLangFromUrl(url: URL): Language {
	const [, lang] = url.pathname.split("/");
	if (lang && lang in ui) return lang as Language;
	return defaultLang;
}

export function getPathWithoutLang(url: URL) {
	const lang = getLangFromUrl(url);
	if (lang === defaultLang) return url.pathname;
	if (`/${lang}` === url.pathname) return "/";
	return url.pathname.slice(lang.length + 1);
}

export function useTranslations(lang: Language) {
	return function t(
		key: keyof (typeof ui)[typeof defaultLang],
		...args: string[]
	) {
		const text = ui[lang]?.[key] || ui[defaultLang][key];
		return args.length > 0
			? text.replace(
					/{(\d+)}/g,
					(match, p1) => args[Number.parseInt(p1)] || match,
				)
			: text;
	};
}

export function getRelativeLocaleUrl(lang: string, path: string) {
	const availableLangForPath = supportedLanguagesPerPath[path];
	if (
		!availableLangForPath ||
		!availableLangForPath.includes(lang as Language)
	) {
		return getRelativeLocaleUrlAstro(defaultLang, path);
	}
	return getRelativeLocaleUrlAstro(lang, path);
}
