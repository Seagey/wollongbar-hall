"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Info } from "lucide-react";

export function PopupMessage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 z-50 w-auto sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-[#2C4C3B]/10 overflow-hidden"
        >
          <div className="bg-[#2C4C3B] p-4 flex items-start justify-between">
            <div className="flex items-center gap-3 text-[#F3EFEA]">
              <Info className="w-5 h-5 flex-shrink-0" />
              <h4 className="font-bold">Volunteer Run</h4>
            </div>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-[#F3EFEA]/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-5">
            <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
              We are a dedicated volunteer committee. Due to limited capacity, we do not take phone inquiries. 
            </p>
            <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mt-2 font-medium">
              Please reach out via our online form, email, or Facebook Messenger, and we aim to respond within <strong className="text-[#E07A5F]">72 hours</strong>. Thank you for your patience!
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
