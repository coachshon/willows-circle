"use server";

/**
 * 🛠 Generic helper to fetch data from an API endpoint with error handling and customizable options.
 *
 * @param endpoint - The API endpoint path (relative to the base API URL).
 * @param method - HTTP method (e.g., 'GET', 'POST', etc.). Default is 'GET'.
 * @param body - Optional request body for POST/PUT requests. Automatically stringified.
 * @param headers - Additional request headers. Defaults to Authorization header with the GRIST token if provided.
 * @param cache - Cache policy (e.g., 'no-store'). Default is 'no-store'.
 * @returns Parsed JSON data from the response.
 * @throws Will throw an error if the network request fails or the response is not OK.
 */
export const fetchApi = async (
  endpoint: string,
  method: string = "GET",
  body?: unknown,
  headers: HeadersInit = {},
  cache: RequestCache = "no-store"
) => {
  const baseApiUrl = process.env.GRIST_API_URL as string;
  if (!baseApiUrl) {
    throw new Error("Base API URL is not defined in environment variables.");
  }

  const authToken = process.env.GRIST_AUTH_TOKEN;
  if (!authToken) {
    throw new Error("Authorization token is missing.");
  }

  const defaultHeaders: HeadersInit = {
    Authorization: `Bearer ${authToken}`,
    "Content-Type": "application/json",
    ...headers,
  };

  const options: RequestInit = {
    method,
    headers: defaultHeaders,
    cache,
  };

  // Set the body only if it's provided and the method allows it (e.g., POST, PUT)
  if (body && method !== "GET") {
    options.body = JSON.stringify(body);
  }

  const fullUrl = `${baseApiUrl}${endpoint}`;

  try {
    const response = await fetch(fullUrl, options);

    // Throw an error for non-OK responses
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `❗ Failed to fetch ${fullUrl}: ${response.status} ${response.statusText}. Response: ${errorText}`
      );
    }

    // Return parsed JSON response
    return await response.json();
  } catch (error) {
    console.error(`❗ Error in fetchApi for ${endpoint}:`, error);
    throw error; // Re-throw error for handling in calling code
  }
};
