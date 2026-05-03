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
    console.log("=== NEW BOOKING INQUIRY RECEIVED ===");
    console.log(data);
    
    // Simulate network latency for UX
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Note: To fully integrate with Wix Bookings, you would need to fetch available 
    // time slots (sessions) first, as Wix requires a scheduleId to create a booking.
    // For manual-approval inquiries, sending to Wix Inbox or using an email API like Resend is recommended.
    
    return { success: true, message: "Inquiry received successfully." };
  } catch (error: any) {
    console.error("Error submitting inquiry:", error);
    return { success: false, error: error.message };
  }
}
