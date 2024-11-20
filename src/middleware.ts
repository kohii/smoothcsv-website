import { getRelativeLocaleUrl } from "astro:i18n";
import { defineMiddleware } from "astro:middleware";
import { defaultLang } from "@i18n/ui";
import { getLangFromUrl, getPathWithoutLang } from "@i18n/utils";

const supportedLanguagesPerPath: Record<string, string[]> = {
	"/": ["en", "ja"],
};

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware(async (context, next) => {
	const pathWithoutLang = getPathWithoutLang(context.url);
	const langFromUrl = getLangFromUrl(context.url);

	const supportedLanguages = supportedLanguagesPerPath[pathWithoutLang];
	context.locals.supportedLanguages = supportedLanguages ?? [defaultLang];

	// no language is available for the path
	if (!supportedLanguages) {
		return next();
	}

	// if the locale is set in the cookie, redirect to the url with the locale
	const localeFromCookie = getLocaleFromCookies(
		context.request.headers.get("cookie"),
	);

	// if the locale is already set, do nothing
	if (localeFromCookie === langFromUrl) {
		return next();
	}

	// if the locale is set in the cookie, redirect to the url with the locale
	if (localeFromCookie && supportedLanguages.includes(localeFromCookie)) {
		return context.redirect(
			getRelativeLocaleUrl(localeFromCookie, pathWithoutLang),
			302,
		);
	}

	// if the locale is explicitly set in the url, do nothing
	if (langFromUrl !== defaultLang) {
		return next();
	}

	// detect the locale from the accept-language header
	const acceptLanguage = context.request.headers.get("accept-language");
	if (acceptLanguage) {
		const languages = acceptLanguage
			.split(",")
			.map((lang) => lang.split(";")[0]);
		for (const language of languages) {
			if (language && supportedLanguages.includes(language)) {
				if (language === langFromUrl) {
					return next();
				}
				return context.redirect(
					getRelativeLocaleUrl(language, pathWithoutLang),
					302,
				);
			}
		}
	}

	return next();
});

function getLocaleFromCookies(
	cookies: string | undefined | null,
): string | undefined {
	const match = cookies?.match(/locale=([^;]+)/);
	return match?.[1];
}
