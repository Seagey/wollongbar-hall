import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#F3EFEA] py-12 mt-auto relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#D4A373] mb-4">Wollongbar Community Hall</h3>
            <p className="text-sm opacity-80 leading-relaxed max-w-xs">
              Managed by the Wollongbar Community Action Network (WCAN), providing an affordable and welcoming space for residents.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#D4A373]">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/wcan" className="hover:text-white transition-colors">About WCAN</Link></li>
              <li><Link href="/whats-on" className="hover:text-white transition-colors">What&apos;s On</Link></li>
              <li><Link href="/book-hall" className="hover:text-white transition-colors">Book Hall</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#D4A373]">Let's Chat</h4>
            <p className="text-sm opacity-80 leading-relaxed mb-4">
              We are a volunteer-run group. For all inquiries, please reach out online via email, our form, or Facebook Messenger.
            </p>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Email: <a href="mailto:Wollongbarhall@gmail.com" className="hover:text-white transition-colors">Wollongbarhall@gmail.com</a></li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100079931239287" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  Facebook Page
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm opacity-60 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Wollongbar Community Action Network. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Design & Developed by Under Seage Studio</p>
        </div>
      </div>
    </footer>
  );
}
