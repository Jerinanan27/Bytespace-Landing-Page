"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/content";
import Logo from "./Logo";

// Header over the blue hero. Collapses to a menu below `md`.
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="container-x relative flex h-[120px] items-start justify-between">
        <Link href="/" className="ml-0.5 mt-[35px] shrink-0">
          <Logo />
        </Link>

        <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-start gap-6 md:flex">
          {navLinks.map((link, i) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`font-body text-base text-gray-50 transition-opacity hover:opacity-80 ${
                  i === 0 ? "font-medium leading-[1.2]" : "leading-[1.6]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 hidden items-start gap-6 md:flex">
          <Link href="/login" className="font-body text-base leading-6 text-gray-50 hover:opacity-80">
            Sign In
          </Link>
          <Link href="/register" className="font-body text-base leading-6 text-gray-50 hover:opacity-80">
            Join Us
          </Link>
          <button aria-label="Cart" className="h-6 w-6">
            <Image src="/images/icon-bag.png" alt="" width={72} height={72} className="h-6 w-6" />
          </button>
        </div>

        <button
          className="mt-[42px] flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-0.5 w-6 bg-gray-50" />
          <span className="h-0.5 w-6 bg-gray-50" />
          <span className="h-0.5 w-6 bg-gray-50" />
        </button>
      </nav>

      {open && (
        <div className="container-x md:hidden">
          <div className="flex flex-col gap-4 rounded-card bg-white p-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-base text-gray-950"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-gray-100" />
            <Link href="/login" className="font-body text-base text-gray-950">
              Sign In
            </Link>
            <Link
              href="/register"
              className="rounded-pill bg-electric-lime px-6 py-3 text-center font-body font-medium text-gray-950"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
