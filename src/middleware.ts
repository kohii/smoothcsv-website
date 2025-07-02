import { getRelativeLocaleUrl } from "astro:i18n";
import { defineMiddleware } from "astro:middleware";
import { defaultLang, supportedLanguagesPerPath } from "@i18n/constants";
import { decideDisplayLanguage } from "@i18n/decideDisplayLanguage";
import { getLangFromUrl, getPathWithoutLang } from "@i18n/utils";

function trimTrailingSlash(path: string) {
	if (path === "/") return path;
	return path.replace(/\/$/, "");
}

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware(async (context, next) => {
	const pathWithoutLang = getPathWithoutLang(context.url);
	const langFromUrl = getLangFromUrl(context.url);

	const supportedLanguages =
		supportedLanguagesPerPath[trimTrailingSlash(pathWithoutLang)];
	context.locals.supportedLanguages = supportedLanguages ?? [defaultLang];

	// no language is available for the path
	if (!supportedLanguages) {
		return next();
	}

	const displayLang = decideDisplayLanguage(
		langFromUrl,
		supportedLanguages,
		() => getLocaleFromCookies(context.request.headers.get("cookie")),
		() => context.request.headers.get("accept-language") ?? undefined,
	);

	if (displayLang === langFromUrl) {
		return next();
	}
	return context.redirect(
		getRelativeLocaleUrl(displayLang, pathWithoutLang),
		302,
	);
});

function getLocaleFromCookies(
	cookies: string | undefined | null,
): string | undefined {
	const match = cookies?.match(/locale=([^;]+)/);
	return match?.[1];
}
