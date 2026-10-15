"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Armchair, ChefHat, LayoutGrid, Accessibility, TreePine, DoorClosed } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[100vh] min-h-[600px] flex items-center justify-center pt-28">
        
        {/* Background Image with Dark Gradient */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/SiteFiles/wcg-hero-image.png" 
            alt="Wollongbar Hall Community" 
            fill 
            className="object-cover object-[25%_top] lg:object-top"
            priority
          />
          {/* A gradient that darkens the right side on desktop where the text lives, and top-down on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-l from-black/80 lg:from-black/90 via-black/50 lg:via-black/30 to-transparent"></div>
        </div>

        {/* Fun floating stickers/shapes */}
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-10 md:left-32 z-20 w-24 h-24 bg-[#D4A373] rounded-full mix-blend-overlay blur-md opacity-80"
        />
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 right-10 md:right-32 z-20 w-32 h-32 bg-[#E07A5F] rounded-full mix-blend-overlay blur-xl opacity-60"
        />

        <div className="relative z-10 px-4 max-w-7xl mx-auto w-full flex flex-col items-center lg:items-end text-center lg:text-right mt-12">
          <div className="max-w-2xl flex flex-col items-center lg:items-end">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-6"
            >
              <span className="bg-[#D4A373] text-[#1A1A1A] px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase shadow-lg transform -rotate-2 lg:rotate-2 inline-block">
                Welcome to WCAN
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] drop-shadow-lg"
            >
              The Heart of Our <br/>
              <span className="text-[#D4A373] italic">Community</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-2xl text-white/95 mb-10 font-light drop-shadow-md"
            >
              Providing a bright, welcoming space for local groups, businesses, and residents to connect and thrive together.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link 
                href="/book-hall" 
                className="bg-[#D4A373] text-[#1A1A1A] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e0b589] transition-transform hover:-translate-y-1 shadow-xl"
              >
                Book the Hall
              </Link>
              <Link 
                href="/wcan" 
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-transform hover:-translate-y-1 shadow-xl"
              >
                About WCAN
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro / Library Notice Highlight */}
      <section className="py-24 px-4 bg-[#F3EFEA] relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl text-[#2C4C3B] mb-6">A Shared Space for Everyone</h2>
          <p className="text-[#1A1A1A]/80 leading-relaxed mb-12 text-xl font-light">
            Wollongbar Community Action Network (WCAN) proudly manages the hall on behalf of the residents. We believe that a strong, connected community is the foundation of a happy and fulfilling life.
          </p>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white border border-[#2C4C3B]/10 rounded-[2rem] p-8 md:p-12 text-left shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A373]/10 rounded-bl-full -z-0"></div>
            
            <h3 className="font-serif text-3xl text-[#2C4C3B] mb-4 relative z-10">Temporary Library Hub</h3>
            <p className="text-[#1A1A1A]/80 leading-relaxed mb-6 text-lg relative z-10">
              From May 5th, Ballina Shire Council will be running the Alstonville Library temporarily from the hall for the next 12 months. Because of this, bookings are limited and all parties are strictly prohibited. 
            </p>
            <p className="text-[#1A1A1A]/80 leading-relaxed font-medium text-lg relative z-10">
              All formal booking requests must still go through the WCAN committee online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's On Section */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="text-[#E07A5F] font-bold tracking-wider uppercase text-sm mb-2 block">See what&apos;s happening</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2C4C3B] mb-6">What&apos;s On at the Hall</h2>
            <p className="text-[#1A1A1A]/70 max-w-2xl mx-auto text-lg">
              Browse upcoming events, regular groups, and availability before you plan your visit or booking.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#2C4C3B]/5 shadow-sm mb-10">
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

          <div className="text-center">
            <Link
              href="/whats-on"
              className="bg-[#2C4C3B] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1f362a] transition-transform hover:-translate-y-1 inline-block shadow-lg"
            >
              View the full calendar
            </Link>
          </div>
        </div>
      </section>

      {/* Community Garden Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute -left-20 top-20 w-64 h-64 bg-[#81B29A]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                {/* Replaced the inside-hall image with another one from the site files */}
                <motion.div whileHover={{ y: -5 }} className="relative h-48 md:h-64 rounded-3xl overflow-hidden shadow-xl">
                  <Image src="/SiteFiles/464295311_533967869277583_4153933012053909595_n.jpg" alt="Community Garden planting" fill className="object-cover" />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} className="relative h-40 md:h-56 rounded-3xl overflow-hidden shadow-xl">
                  <Image src="/SiteFiles/670975465_934047992602900_8103832017816692310_n.jpg" alt="Fresh produce" fill className="object-cover" />
                </motion.div>
              </div>
              <div className="space-y-4">
                <motion.div whileHover={{ y: -5 }} className="relative h-40 md:h-56 rounded-3xl overflow-hidden shadow-xl">
                  <Image src="/SiteFiles/671541590_934047882602911_651887730526219236_n.jpg" alt="Locals gardening" fill className="object-cover" />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} className="relative h-48 md:h-64 rounded-3xl overflow-hidden shadow-xl">
                  <Image src="/SiteFiles/672674684_934048079269558_7973126570469760376_n.jpg" alt="Garden beds" fill className="object-cover" />
                </motion.div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-[#E07A5F] font-bold tracking-wider uppercase text-sm mb-2 block">Get your hands dirty</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#2C4C3B] mb-6">Wollongbar Community Garden</h2>
              <p className="text-[#1A1A1A]/80 leading-relaxed text-lg mb-6">
                Join us every Friday morning from 9am! Help plant, learn to garden alongside the locals, and take home some fresh produce for your family.
              </p>
              <p className="text-[#1A1A1A]/80 leading-relaxed text-lg mb-10">
                From fragrant herbs and Asian greens to crisp lettuce, the list of plants is endless and constantly growing. It's a wonderful way to connect with your neighbours and nature.
              </p>
              <Link 
                href="/wcan" 
                className="bg-[#2C4C3B] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1f362a] transition-transform hover:-translate-y-1 inline-flex items-center gap-2 shadow-lg"
              >
                Read more about our initiatives
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* Hall Features */}
      <section className="py-24 px-4 bg-[#F3EFEA] relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-[#2C4C3B] mb-6">Venue Features</h2>
            <p className="text-[#1A1A1A]/70 max-w-2xl mx-auto text-lg">An affordable, fully-equipped space ready for your meetings, workshops, and gatherings.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "100 Chairs", desc: "Padded back indoor chairs for total comfort.", Icon: Armchair },
              { title: "Equipped Kitchen", desc: "Sink, fridge, oven, and stove top.", Icon: ChefHat },
              { title: "6 Trestle Tables", desc: "6ft foldable trestle tables for meetings.", Icon: LayoutGrid },
              { title: "Accessible Bathrooms", desc: "Men, women & unisex/accessible bathrooms.", Icon: Accessibility },
              { title: "Backyard", desc: "Lovely tiered and fenced outdoor backyard.", Icon: TreePine },
              { title: "Change Rooms", desc: "Additional change or storage rooms.", Icon: DoorClosed }
            ].map((feature, i) => {
              const Icon = feature.Icon;
              return (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-[#2C4C3B]/5 hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-[#D4A373]/20 rounded-full flex items-center justify-center mb-6 text-[#D4A373]">
                    <Icon className="w-6 h-6" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-bold text-xl text-[#2C4C3B] mb-3">{feature.title}</h3>
                  <p className="text-[#1A1A1A]/70 leading-relaxed text-lg">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-20 text-center">
            <p className="text-xl mb-8">Rates starting from <strong className="text-[#E07A5F] font-bold text-2xl">$20/Hour</strong> for regular hirers.</p>
            <Link 
              href="/book-hall" 
              className="bg-[#E07A5F] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#c96c53] transition-transform hover:-translate-y-1 inline-block shadow-lg"
            >
              View Full Pricing & Book
            </Link>
          </div>
        </div>
      </section>

      {/* Facebook CTA Section */}
      <section className="py-24 px-4 bg-[#2C4C3B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl text-[#F3EFEA] mb-6">Stay Connected</h2>
          <p className="text-[#F3EFEA]/80 text-lg mb-10 max-w-2xl mx-auto font-light">
            Follow the Wollongbar Community Action Network on Facebook to stay up to date with our latest events, community garden harvests, and hall updates.
          </p>
          <a 
            href="https://www.facebook.com/profile.php?id=100079931239287" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1877F2] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#166fe5] transition-transform hover:-translate-y-1 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            Join our Community
          </a>
        </div>
      </section>
    </div>
  );
}
