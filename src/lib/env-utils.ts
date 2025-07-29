import { env } from "@/env";

/**
 * Utility functions for working with environment variables
 */

export function isDevelopment() {
  return env.NODE_ENV === "development";
}

export function isProduction() {
  return env.NODE_ENV === "production";
}

export function isTest() {
  return env.NODE_ENV === "test";
}

/**
 * Get the full application URL
 */
export function getAppUrl(): string {
  // Check if we're in a browser environment
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  // Check if we have the environment variable
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  // Fallback for development
  return "http://localhost:3000";
}
