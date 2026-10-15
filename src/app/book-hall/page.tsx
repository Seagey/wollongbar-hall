"use client";

import { useState } from "react";
import { submitBookingRequest } from "@/app/actions";

export default function BookHallPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      date: formData.get("date"),
      details: formData.get("details"),
    };

    const response = await submitBookingRequest(data);
    
    if (response.success) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="w-full bg-[#F3EFEA] min-h-screen">
      <div className="pt-20 pb-16 px-4 max-w-5xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif text-5xl font-bold text-[#2C4C3B] mb-6">Book Wollongbar Hall</h1>
          <p className="text-xl text-[#1A1A1A]/80 font-light leading-relaxed">
            Please review our new booking process below. As the Alstonville Library is temporarily operating from the hall, all bookings are subject to Council approval and availability is limited.
          </p>
        </div>

        {/* What's On — public hall calendar */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#2C4C3B]/5 shadow-sm mb-16">
          <h2 className="font-serif text-3xl text-[#2C4C3B] mb-2">What&apos;s On at the Hall</h2>
          <p className="text-[#1A1A1A]/70 mb-6 text-sm">Check current availability and upcoming events before you submit your inquiry.</p>
          <div className="overflow-hidden rounded-2xl border border-[#2C4C3B]/10">
            <iframe
              title="Wollongbar Hall calendar"
              src="https://calendar.google.com/calendar/embed?src=wollongbarhall%40gmail.com&ctz=Australia%2FSydney&mode=MONTH&showTitle=0&showPrint=0&showTabs=1&showCalendars=0&showTz=0"
              className="w-full h-[480px] md:h-[600px]"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Information & Process Column */}
          <div className="lg:col-span-5 space-y-12">
            
            <div className="bg-white p-8 rounded-3xl border border-[#2C4C3B]/5 shadow-sm">
              <h2 className="font-serif text-2xl text-[#2C4C3B] mb-6">How to Book</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2C4C3B] text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A]">Submit Inquiry</h3>
                    <p className="text-sm text-[#1A1A1A]/70 mt-1">Fill out the form on this page. All inquiries must go through the WCAN committee.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2C4C3B] text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A]">Approval</h3>
                    <p className="text-sm text-[#1A1A1A]/70 mt-1">We aim to respond within 72 hours. Final approval is subject to Council sign-off.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl text-[#2C4C3B] mb-4">Pricing</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-[#2C4C3B]/10 pb-2">
                  <span className="font-medium">Regular Hirers (8+ bookings/yr)</span>
                  <span className="font-bold text-[#D4A373]">$20 / hr</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#2C4C3B]/10 pb-2">
                  <span className="font-medium">Casual Hirers (One-off)</span>
                  <span className="font-bold text-[#D4A373]">$30 / hr</span>
                </div>
                <p className="text-xs text-red-600/80 uppercase font-bold tracking-wider mt-2">
                  * Parties are strictly prohibited during the library takeover period.
                </p>
              </div>
            </div>
            
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-[#2C4C3B]/5 shadow-sm">
              <h2 className="font-serif text-3xl text-[#2C4C3B] mb-2">Booking Inquiry</h2>
              <p className="text-[#1A1A1A]/70 mb-8 text-sm">Please provide as much detail as possible. Our volunteer committee aims to respond within 72 hours.</p>

              {status === "success" ? (
                <div className="bg-[#2C4C3B]/10 border border-[#2C4C3B]/20 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-serif text-[#2C4C3B] mb-2">Inquiry Received</h3>
                  <p className="text-[#1A1A1A]/80">Thank you for your interest. The WCAN committee will review your request and get back to you within 72 hours.</p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="mt-6 px-6 py-2 bg-[#2C4C3B] text-white rounded-full text-sm font-medium hover:bg-[#1f362a] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-[#1A1A1A]">First Name *</label>
                      <input required type="text" id="firstName" name="firstName" className="w-full px-4 py-3 rounded-xl bg-[#F3EFEA] border-none focus:ring-2 focus:ring-[#D4A373] transition-shadow outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-[#1A1A1A]">Last Name *</label>
                      <input required type="text" id="lastName" name="lastName" className="w-full px-4 py-3 rounded-xl bg-[#F3EFEA] border-none focus:ring-2 focus:ring-[#D4A373] transition-shadow outline-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-[#1A1A1A]">Email Address *</label>
                      <input required type="email" id="email" name="email" className="w-full px-4 py-3 rounded-xl bg-[#F3EFEA] border-none focus:ring-2 focus:ring-[#D4A373] transition-shadow outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-[#1A1A1A]">Phone Number</label>
                      <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-xl bg-[#F3EFEA] border-none focus:ring-2 focus:ring-[#D4A373] transition-shadow outline-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-medium text-[#1A1A1A]">Requested Date *</label>
                    <input required type="date" id="date" name="date" className="w-full px-4 py-3 rounded-xl bg-[#F3EFEA] border-none focus:ring-2 focus:ring-[#D4A373] transition-shadow outline-none text-[#1A1A1A]/80" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="details" className="text-sm font-medium text-[#1A1A1A]">Event Details & Timings *</label>
                    <textarea 
                      required 
                      id="details" 
                      name="details"
                      rows={4} 
                      placeholder="Please describe your event, expected attendees, and required access times..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F3EFEA] border-none focus:ring-2 focus:ring-[#D4A373] transition-shadow outline-none resize-none" 
                    ></textarea>
                  </div>

                  <button 
                    disabled={status === "loading"}
                    type="submit" 
                    className="w-full bg-[#2C4C3B] text-[#F3EFEA] py-4 rounded-xl font-medium hover:bg-[#1f362a] transition-transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {status === "loading" ? "Submitting..." : "Submit Inquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
