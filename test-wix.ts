import { createClient, OAuthStrategy } from "@wix/sdk";
import { services } from "@wix/bookings";

const wixClient = createClient({
  modules: { services },
  auth: OAuthStrategy({
    clientId: "a01e6d86-4462-4e9a-a35d-bd13bdd523dc",
  }),
});

async function run() {
  try {
    const serviceList = await wixClient.services.queryServices().find();
    console.log(JSON.stringify(serviceList.items.map(s => ({ id: s._id, name: s.name })), null, 2));
  } catch (error) {
    console.error("Error:", error);
  }
}
run();
