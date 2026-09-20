"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
const toggleVisibility = () => {
setIsVisible(window.scrollY > 500);
};

toggleVisibility();

window.addEventListener("scroll", toggleVisibility, { passive: true });

return () => window.removeEventListener("scroll", toggleVisibility);

}, []);

const scrollToTop = () => {
window.scrollTo({
top: 0,
behavior: "smooth",
});
};

if (!isVisible) {
return null;
}

return ( <button
   type="button"
   onClick={scrollToTop}
   aria-label="Back to top"
   className="fixed bottom-6 right-6 z-[9999] flex h-11 w-11 items-center justify-center rounded-full border border-[#334155] bg-[#0C141F] text-[#B8944A] shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-1 hover:border-[#B8944A] hover:bg-[#111C31] hover:text-[#D0AE69] hover:shadow-[0_8px_28px_rgba(184,148,74,0.22)] focus:outline-none focus:ring-2 focus:ring-[#B8944A]/40"
 > <svg
     className="h-[18px] w-[18px]"
     fill="none"
     stroke="currentColor"
     viewBox="0 0 24 24"
     aria-hidden="true"
   > <path
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth={2}
       d="M5 15l7-7 7 7"
     /> </svg> </button>
);
}
