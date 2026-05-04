import { createClient, OAuthStrategy } from "@wix/sdk";
import { forms } from "@wix/forms";

const wixClient = createClient({
  modules: { forms },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID || "a01e6d86-4462-4e9a-a35d-bd13bdd523dc",
  }),
});

async function run() {
  const namespaces = ["wix.form_app", "wix.form_builder", "wix.forms", "custom"];
  for (const ns of namespaces) {
    try {
      const res = await wixClient.forms.queryForms().eq("namespace", ns).find();
      if (res.items.length > 0) {
        console.log(`FOUND in ${ns}:`);
        console.log(JSON.stringify(res.items.map((f: any) => ({ id: f._id, name: f.name, fields: f.fields })), null, 2));
      }
    } catch(e: any) {
      console.error(`Error in ${ns}:`, e.message);
    }
  }
}
run();
