import Image from "next/image";
import Link from "next/link";

export default function WcanPage() {
  return (
    <div className="w-full bg-[#F3EFEA] min-h-screen">
      {/* Header Space */}
      <div className="pt-24 pb-12 px-4 max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-5xl font-bold text-[#2C4C3B] mb-6">About WCAN</h1>
        <p className="text-xl text-[#1A1A1A]/80 font-light leading-relaxed">
          The Wollongbar Community Action Network (WCAN) is a passionate and dedicated group of residents committed to enhancing the quality of life in our community.
        </p>
      </div>

      {/* Content Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Our Story */}
          <div>
            <h2 className="font-serif text-3xl text-[#2C4C3B] mb-6 flex items-center gap-4">
              <span className="h-px bg-[#D4A373] w-12 block"></span>
              Our Story
            </h2>
            <p className="text-[#1A1A1A]/80 text-lg leading-relaxed mb-6">
              Our network includes people from all walks of life, including local business owners, families, retirees, and young professionals, working together to create a better future for everyone in our area. We believe in the power of community and know that by coming together, we can achieve great things.
            </p>
            <p className="text-[#1A1A1A]/80 text-lg leading-relaxed">
              We believe that a strong, connected community is the foundation of a happy and fulfilling life. Wollongbar is a beautiful place to live, and by working together, we can make it even better. Our mission is to empower residents to take an active role in shaping the future of our town. WCAN exists because we understand the importance of community, and how it supports us, inspires us, and gives us a sense of belonging. Whether it's advocating for better services, creating spaces for social connection, or simply providing a platform for residents to be heard, we are here to make a difference.
            </p>
          </div>

          {/* What We Do */}
          <div>
            <h2 className="font-serif text-3xl text-[#2C4C3B] mb-8 flex items-center gap-4">
              <span className="h-px bg-[#D4A373] w-12 block"></span>
              What We Do
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#F3EFEA] p-8 rounded-2xl border border-[#2C4C3B]/5">
                <h3 className="font-bold text-xl text-[#2C4C3B] mb-4">Advocacy</h3>
                <p className="text-[#1A1A1A]/70 leading-relaxed">
                  We represent the voices of Wollongbar residents to local government and other stakeholders. Our goal is to ensure that community concerns are heard and addressed. From infrastructure improvements to environmental sustainability, we advocate for issues that matter to our community.
                </p>
              </div>

              <div className="bg-[#F3EFEA] p-8 rounded-2xl border border-[#2C4C3B]/5">
                <h3 className="font-bold text-xl text-[#2C4C3B] mb-4">Events</h3>
                <p className="text-[#1A1A1A]/70 leading-relaxed">
                  We organise and host a variety of events that bring people together, such as plant swaps, markets, and cultural activities. These events are designed to foster connection, build relationships, and celebrate the unique character of Wollongbar.
                </p>
              </div>
              
              <div className="bg-[#F3EFEA] p-8 rounded-2xl border border-[#2C4C3B]/5 md:col-span-2">
                <h3 className="font-bold text-xl text-[#2C4C3B] mb-4">Wollongbar Community Hall</h3>
                <p className="text-[#1A1A1A]/70 leading-relaxed mb-6">
                  WCAN manages the Wollongbar Community Hall, providing an affordable and welcoming space for local groups, businesses, and residents to host events, meetings, and activities. We are proud to maintain this important community asset, ensuring it remains a vibrant hub for local engagement.
                </p>
                <Link 
                  href="/book-hall" 
                  className="text-[#2C4C3B] font-medium hover:text-[#D4A373] transition-colors inline-flex items-center gap-2"
                >
                  Book the hall <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
