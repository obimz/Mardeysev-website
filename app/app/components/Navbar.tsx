"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(!isHomePage);

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

  return (
    <header className={`topbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container topbar-inner">
        <Link href="/" className="brand" aria-label="Mardysev Solar Limited home">
          <Image src="/images/mardeysev-logo 1.png" alt="Mardysev Solar Limited" width={40} height={40} />
          <span>Mardysev Solar Limited</span>
        </Link>

        <nav className="nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
