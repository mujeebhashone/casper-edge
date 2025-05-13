import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="bg-white px-12 py-4 shadow-sm rounded-tr-xl rounded-tl-xl font-sans">
      <div className="flex items-center justify-between w-full">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Image src="/assets/images/logo-casper.png" alt="Stethoscope" width={272} height={74} />
        </div>
        {/* Nav Links */}
        <nav className="flex gap-10 text-base font-normal">
          <Link href="#practice-questions" className="text-primary no-underline">Practice Questions</Link>
          <Link href="#pricing" className="text-primary no-underline">Pricing</Link>
          <Link href="#testimonials" className="text-primary no-underline">Testimonials</Link>
          <Link href="#blog" className="text-primary no-underline">Blog</Link>
        </nav>
        {/* Button */}
        <Link href="#" className="bg-secondary text-secondary-foreground rounded-full px-8 py-2 font-semibold text-base shadow font-sans">
          Start Practice
        </Link>
      </div>
    </header>
  )
}

export default Header