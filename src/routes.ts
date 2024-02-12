/**
 * Routes that are accessible to the public
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * Routes that are accessible to authenticated users
 * @type {string[]}
 */
export const authRoutes = ["/login", "/signup"];

/**
 * Routes that are accessible to authenticated users
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default route to redirect to after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";
