import { createClient, OAuthStrategy } from "@wix/sdk";
import { messages } from "@wix/inbox";

const wixClient = createClient({
  modules: { messages },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID || "a01e6d86-4462-4e9a-a35d-bd13bdd523dc",
  }),
});

async function run() {
  try {
    const res = await wixClient.messages.sendMessage({
      message: {
        content: "Test message from API",
        contentType: "TEXT"
      }
    });
    console.log("Success", res);
  } catch (e: any) {
    console.error("Error", e.message, e.details);
  }
}
run();
