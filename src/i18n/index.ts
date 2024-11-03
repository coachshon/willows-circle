import { createInstance, InitOptions } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions, languages, fallbackLng } from "./settings";
import { cookies, headers } from "next/headers";
import acceptLanguage from "accept-language";

const cookieName = "i18next";

// Set the accepted languages from i18n\settings in the acceptLanguage instance
acceptLanguage.languages(languages);

// Create i18n instance and load locale resource JSON files
const initI18next = async (lng: string, ns?: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng, ns) as InitOptions);
  return i18nInstance;
};

// Get the language set in the middleware "withResponse" headers and cookies
export async function detectLanguage(): Promise<string> {
  const cookieStore = cookies();
  const headerStore = headers();

  let lng = acceptLanguage.get((await headerStore).get("content-language"));
  if (!lng && (await cookieStore).has(cookieName)) {
    lng = (await cookieStore).get(cookieName)?.value ?? null;
  }
  if (!lng) lng = fallbackLng;

  return lng;
}

// Called from server-side pages
export async function useTranslation(
  ns?: string,
  options: { keyPrefix?: string } = {}
) {
  const lng = await detectLanguage(); // Await detectLanguage call
  const i18nextInstance = await initI18next(lng, ns);

  return {
    t: i18nextInstance.getFixedT(lng, ns, options.keyPrefix),
    i18n: i18nextInstance,
  };
}
