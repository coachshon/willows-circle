import { NextRequest, NextResponse } from "next/server";
import { fallbackLng } from "@/i18n/settings";
import { MiddlewareFactory } from "./types";
import { cookieName } from "@/constants/cookieName";

// 👇️ return request's response
export const withResponse: MiddlewareFactory = () => {
  return async (request: NextRequest) => {
    const { pathname } = request.nextUrl;
    // 🌍 Get the localization language, set in 'withLocalization'
    let lng = request.cookies.get(cookieName)?.value;
    if (!lng) lng = fallbackLng;
    // Add lng route if missing or invalid lng in request url
    const isValidPath =
      request.cookies.get("languagePrefix")?.value === lng ? true : false;

    // 🛸 Re-route with lng if necessary
    if (request.nextUrl.pathname === "/" || !isValidPath) {
      return NextResponse.redirect(new URL(`/${lng}/${pathname}`, request.url));
    }

    // 👇️ create response
    const response = NextResponse.next();

    // 🍪 set response cookie with value set in middleware 'withLocalization'- used in i18n libraries
    response.cookies.set(cookieName, lng);

    // “⚽” set response header content language value set in middleware 'withLocalization'- used in i18n libraries
    response.headers.set("content-language", lng);

    return response;
  };
};
