import Link from "next/link";

export default function WhatsOnPage() {
  return (
    <div className="w-full bg-[#F3EFEA] min-h-screen">
      <div className="pt-20 pb-16 px-4 max-w-5xl mx-auto">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif text-5xl font-bold text-[#2C4C3B] mb-6">What&apos;s On at Wollongbar Hall</h1>
          <p className="text-xl text-[#1A1A1A]/80 font-light leading-relaxed">
            Browse the latest events, regular groups, and availability at the hall. Check back often as the calendar is updated regularly.
          </p>
        </div>

        {/* What's On — public hall calendar */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#2C4C3B]/5 shadow-sm mb-12">
          <div className="overflow-hidden rounded-2xl border border-[#2C4C3B]/10">
            <iframe
              title="Wollongbar Hall calendar"
              src="https://calendar.google.com/calendar/embed?src=wollongbarhall%40gmail.com&ctz=Australia%2FSydney&mode=MONTH&showTitle=0&showPrint=0&showTabs=1&showCalendars=0&showTz=0"
              className="w-full h-[600px] md:h-[700px]"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/book-hall"
            className="bg-[#E07A5F] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#c96c53] transition-transform hover:-translate-y-1 inline-block shadow-lg"
          >
            Want to book the hall? &rarr;
          </Link>
        </div>

      </div>
    </div>
  );
}
