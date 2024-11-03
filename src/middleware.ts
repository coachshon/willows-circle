import { stackMiddlewares } from "@/middlewares/stackMiddlewares";
import { withLocalization } from "@/middlewares/withLocalization";
import { withResponse } from "@/middlewares/withResponse";

/* 📌
In Next.js, the middleware matcher allows you to match routes for which you want to apply custom middleware logic. 
Middleware allows you to run code before a request is completed so you can modify the response by
rewriting, redirecting, modifying the request or response headers, or responding directly.
*/
/*
Middleware will be invoked for every route in your project. The following is the execution order:
headers from next.config.js
redirects from next.config.js
Middleware (rewrites, redirects, etc.)
beforeFiles (rewrites) from next.config.js
Filesystem routes (public/, _next/static/, Pages, etc.)
afterFiles (rewrites) from next.config.js
Dynamic Routes (/blog/[slug])
fallback (rewrites) from next.config.js
*/

/*👇️
There are two ways to define which paths Middleware will run on:
Custom matcher config
Conditional statements
*/
export const config = {
  matcher: [
    "/((?!api|static|_next|data|favicon.ico|sw.js|manifest.json|icons/).*)", // Exclusions
    "/src/app/:path*", // Include all routes under src/app folder
  ],
};

export default stackMiddlewares([withLocalization, withResponse]);
