"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import clsx from "clsx";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !isScrolled;

  return (
    <header className={clsx(
      "sticky top-0 z-40 w-full transition-all duration-300",
      isHomePage ? "-mb-[112px]" : "",
      isTransparent 
        ? "bg-transparent border-transparent" 
        : "bg-[#F3EFEA]/95 backdrop-blur-xl border-b border-[#2C4C3B]/10 shadow-sm"
    )}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300" style={{ paddingBottom: isTransparent ? '0.5rem' : '0' }}>
        <div className="flex items-center justify-between h-28 py-2">
          
          {/* Logo -> Home */}
          <div className="flex-shrink-0 flex items-center transition-transform hover:scale-[1.02] max-w-[140px] sm:max-w-none">
            <Link href="/" aria-label="Wollongbar Hall Home">
              <Image 
                src="/SiteFiles/WCAN LOGO FINAL.png" 
                alt="WCAN Logo" 
                width={250} 
                height={120} 
                className={clsx(
                  "object-contain w-full h-auto transition-all duration-300",
                  isTransparent && "brightness-0 invert drop-shadow-md"
                )}
                priority
              />
            </Link>
          </div>
          
          {/* Streamlined Navigation */}
          <nav className="flex items-center gap-3 sm:gap-6">
            <Link 
              href="/wcan" 
              className={clsx(
                "hidden sm:flex text-sm font-bold tracking-wide uppercase transition-all duration-200 border-b-2 pb-1",
                pathname === "/wcan" 
                  ? "text-[#E07A5F] border-[#E07A5F]" 
                  : isTransparent
                    ? "text-white border-transparent hover:border-white/50 drop-shadow-md"
                    : "text-[#2C4C3B] border-transparent hover:text-[#E07A5F] hover:border-[#E07A5F]/30"
              )}
            >
              Our Story
            </Link>
            
            <Link
              href="/wcan"
              className={clsx(
                "sm:hidden text-sm font-bold transition-colors",
                isTransparent ? "text-white drop-shadow-md" : "text-[#2C4C3B] hover:text-[#E07A5F]"
              )}
            >
              WCAN
            </Link>

            <Link
              href="/whats-on"
              className={clsx(
                "hidden sm:flex text-sm font-bold tracking-wide uppercase transition-all duration-200 border-b-2 pb-1",
                pathname === "/whats-on"
                  ? "text-[#E07A5F] border-[#E07A5F]"
                  : isTransparent
                    ? "text-white border-transparent hover:border-white/50 drop-shadow-md"
                    : "text-[#2C4C3B] border-transparent hover:text-[#E07A5F] hover:border-[#E07A5F]/30"
              )}
            >
              What&apos;s On
            </Link>

            <Link
              href="/book-hall"
              className={clsx(
                "px-5 py-2.5 sm:px-8 sm:py-3 rounded-full text-sm font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5",
                pathname === "/book-hall"
                  ? "bg-[#2C4C3B] text-white"
                  : isTransparent
                    ? "bg-white text-[#1A1A1A] hover:bg-[#F3EFEA]"
                    : "bg-[#E07A5F] text-white hover:bg-[#c96c53]"
              )}
            >
              Book Now
            </Link>
          </nav>

        </div>
      </div>
    </header>
  );
}
