import React from 'react';
import { Instagram, Linkedin, X } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#E5E5E5] bg-white rounded-b-2xl px-2 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-[#222] text-base">
      {/* Left: Links */}
      <div className="flex gap-6 items-center w-full md:w-auto justify-center md:justify-start order-2 md:order-1">
        <Link href="#" className="hover:underline">Privacy Policy</Link>
        <Link href="#" className="hover:underline">Terms &amp; Condition</Link>
        <Link href="#" className="hover:underline">Cookies</Link>
      </div>
      {/* Center: Copyright */}
      <div className="flex-1 text-center text-sm md:text-base order-1 md:order-2">
        © 2025 | Cracking Med School Admissions LP | All rights reserved
      </div>
      {/* Right: Social Icons */}
      <div className="flex gap-4 items-center w-full md:w-auto justify-center md:justify-end order-3">
        <Link href="#" aria-label="X" className="hover:text-secondary"><X size={24} strokeWidth={2} /></Link>
        <Link href="#" aria-label="LinkedIn" className="hover:text-secondary"><Linkedin size={24} strokeWidth={2} /></Link>
        <Link href="#" aria-label="Instagram" className="hover:text-secondary"><Instagram size={24} strokeWidth={2} /></Link>
      </div>
    </footer>
  );
};

export default Footer;