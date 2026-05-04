import { createClient, OAuthStrategy } from "@wix/sdk";
import { forms } from "@wix/forms";

const wixClient = createClient({
  modules: { forms },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID || "a01e6d86-4462-4e9a-a35d-bd13bdd523dc",
  }),
});

async function run() {
  const namespaces = ["wix.form_builder", "wix.forms.app", "wix-forms", "wix.form_app", "custom"];
  for (const ns of namespaces) {
    try {
      const res = await wixClient.forms.queryForms().eq("namespace", ns).find();
      console.log(`Namespace ${ns}:`, res.items.map((f: any) => ({ id: f._id, name: f.name })));
    } catch(e) {}
  }
}
run();
