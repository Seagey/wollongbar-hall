import { createClient, OAuthStrategy } from "@wix/sdk";
import { contacts } from "@wix/crm";

const wixClient = createClient({
  modules: { contacts },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID || "a01e6d86-4462-4e9a-a35d-bd13bdd523dc",
  }),
});

async function run() {
  try {
    const contact = await wixClient.contacts.createContact({
      info: {
        name: { first: "Test", last: "User" },
        emails: [{ email: "test@example.com" }]
      }
    });
    console.log("Contact:", contact._id);
  } catch(e: any) {
    console.error("Error", e.message);
  }
}
run();
