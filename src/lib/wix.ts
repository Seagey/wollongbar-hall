import { createClient, OAuthStrategy } from "@wix/sdk";
import { services } from "@wix/bookings";

export const wixClient = createClient({
  modules: { services },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID || "a01e6d86-4462-4e9a-a35d-bd13bdd523dc",
  }),
});
