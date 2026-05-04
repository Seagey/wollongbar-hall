import { createClient, OAuthStrategy } from "@wix/sdk";
import { submissions } from "@wix/forms";

const wixClient = createClient({
  modules: { submissions },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID || "a01e6d86-4462-4e9a-a35d-bd13bdd523dc",
  }),
});

async function run() {
  try {
    const res = await wixClient.submissions.createSubmission({
      formId: "7743cc3e-7a1f-4123-bf63-9ad61f37294f",
      namespace: "wix.form_app.form",
      submissions: {
        first_name: "Test",
        last_name: "User",
        email: "test@example.com",
        phone: "0400000000",
        message: "This is a test message"
      }
    });
    console.log("Success", res);
  } catch(e: any) {
    console.error("Error", e.message);
  }
}
run();
