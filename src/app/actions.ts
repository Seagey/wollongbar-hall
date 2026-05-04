"use server";

import { wixClient } from "@/lib/wix";

export async function fetchWixServices() {
  try {
    const serviceList = await wixClient.services.queryServices().find();
    return {
      success: true,
      services: serviceList.items.map(s => ({ id: s._id, name: s.name }))
    };
  } catch (error: any) {
    console.error("Error fetching Wix Services:", error);
    return { success: false, error: error.message };
  }
}

export async function submitBookingRequest(data: any) {
  try {
    const formattedMessage = `Requested Date: ${data.date}
Phone: ${data.phone || 'Not provided'}

Details:
${data.details}`;

    await wixClient.submissions.createSubmission({
      formId: "7743cc3e-7a1f-4123-bf63-9ad61f37294f", // Contact Form ID from Wix Dashboard
      namespace: "wix.form_app.form",
      submissions: {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        message: formattedMessage
      }
    });
    
    return { success: true, message: "Inquiry received successfully." };
  } catch (error: any) {
    console.error("Error submitting inquiry:", error);
    return { success: false, error: error.message };
  }
}
