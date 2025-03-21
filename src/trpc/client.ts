import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "./routers/_app";

export const getBaseUrl = () => {
  if (typeof window !== 'undefined') return ''; // browser should use relative url
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`; // custom domain
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`
    }),
  ]
});