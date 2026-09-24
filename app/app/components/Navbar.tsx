"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(!isHomePage);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        // On home page, detect when hero section is out of view
        const heroSection = document.querySelector(".hero");
        if (heroSection) {
          const heroBottom = heroSection.getBoundingClientRect().bottom;
          setIsScrolled(heroBottom <= 0);
        }
      } else {
        // On other pages, always show scrolled state
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`topbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container topbar-inner">
        <Link href="/" className="brand" aria-label="Mardysev Solar Limited home">
          <Image src="/images/mardeysev-logo 1.png" alt="Mardysev Solar Limited" width={40} height={40} />
          <span>Mardysev Solar Limited</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <HiOutlineXMark size={28} />
          ) : (
            <HiOutlineBars3 size={28} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <Link href="/" onClick={closeMobileMenu}>Home</Link>
          <Link href="/about" onClick={closeMobileMenu}>About</Link>
          <Link href="/services" onClick={closeMobileMenu}>Services</Link>
          <Link href="/blog" onClick={closeMobileMenu}>Blog</Link>
          <Link href="/contact" onClick={closeMobileMenu}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
