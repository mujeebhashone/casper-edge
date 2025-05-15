'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="bg-white px-4 md:px-12 py-4 shadow-sm rounded-tr-xl rounded-tl-xl font-sans relative z-30">
      <div className="flex items-center justify-between w-full">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Image src="/assets/images/logo-casper.png" alt="Stethoscope" width={120} height={40} unoptimized className="w-[120px] md:w-[272px] h-auto" />
        </div>
        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex gap-10 text-base font-normal">
          <Link href="#practice-questions" className="text-primary no-underline">Practice Questions</Link>
          <Link href="#pricing" className="text-primary no-underline">Pricing</Link>
          <Link href="#testimonials" className="text-primary no-underline">Testimonials</Link>
          <Link href="#blog" className="text-primary no-underline">Blog</Link>
        </nav>
        {/* Button (Desktop) */}
        <Link href="#" className="hidden md:inline-block bg-secondary text-secondary-foreground rounded-full px-8 py-2 font-semibold text-base shadow font-sans">
          Start Practice
        </Link>
        {/* Hamburger (Mobile) */}
        <button
          className="flex flex-col justify-center items-center md:hidden w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            // X icon
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5.63604" y="7.05025" width="16" height="2" rx="1" transform="rotate(45 5.63604 7.05025)" fill="#DA3539"/>
              <rect x="7.05029" y="18.364" width="16" height="2" rx="1" transform="rotate(-45 7.05029 18.364)" fill="#DA3539"/>
            </svg>
          ) : (
            // Hamburger icon
            <>
              <span className="block w-6 h-0.5 bg-primary transition-all duration-300"></span>
              <span className="block w-6 h-0.5 bg-primary my-1 transition-all duration-300"></span>
              <span className="block w-6 h-0.5 bg-primary transition-all duration-300"></span>
            </>
          )}
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      ></div>
      {/* Mobile Menu Drawer */}
      <div className={`md:hidden fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} w-[80vw] max-w-xs`}>
        <div className="flex flex-col p-6 gap-6 h-full relative">
          {/* Close Button (X) */}
          <button
            className="absolute top-4 right-4 p-2 rounded focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5.63604" y="7.05025" width="16" height="2" rx="1" transform="rotate(45 5.63604 7.05025)" fill="#DA3539"/>
              <rect x="7.05029" y="18.364" width="16" height="2" rx="1" transform="rotate(-45 7.05029 18.364)" fill="#DA3539"/>
            </svg>
          </button>
          <nav className="flex flex-col gap-4 text-base font-normal mt-10">
            <Link href="#practice-questions" className="text-primary no-underline" onClick={() => setMenuOpen(false)}>Practice Questions</Link>
            <Link href="#pricing" className="text-primary no-underline" onClick={() => setMenuOpen(false)}>Pricing</Link>
            <Link href="#testimonials" className="text-primary no-underline" onClick={() => setMenuOpen(false)}>Testimonials</Link>
            <Link href="#blog" className="text-primary no-underline" onClick={() => setMenuOpen(false)}>Blog</Link>
          </nav>
          <Link href="#" className="bg-secondary text-secondary-foreground rounded-full px-6 py-2 font-semibold text-base shadow font-sans text-center mt-4" onClick={() => setMenuOpen(false)}>
            Start Practice
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header