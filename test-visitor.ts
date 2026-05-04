import { createClient, OAuthStrategy } from "@wix/sdk";
import { contacts } from "@wix/crm";

const auth = OAuthStrategy({
  clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID || "a01e6d86-4462-4e9a-a35d-bd13bdd523dc",
});

const wixClient = createClient({
  modules: { contacts },
  auth
});

async function run() {
  try {
    const tokens = await auth.generateVisitorTokens();
    wixClient.auth.setTokens(tokens);

    const contact = await wixClient.contacts.createContact({
      info: {
        name: { first: "Test", last: "Visitor" },
        emails: [{ email: "test.visitor@example.com", tag: "WORK", primary: true }]
      }
    });
    console.log("Success! Contact ID:", contact._id);
  } catch(e: any) {
    console.error("Error", e.message);
  }
}
run();
