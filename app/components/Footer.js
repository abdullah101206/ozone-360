'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const [openSections, setOpenSections] = useState({
    shop: false,
    company: false,
    help: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#171717] text-[#F8F5EF] font-sans antialiased border-t border-[#E7E1D8]/10 selection:bg-[#C6A15B] selection:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-12 sm:pt-20 sm:pb-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#E7E1D8]/10">
          
          <div className="lg:col-span-4 space-y-4 pr-0 lg:pr-6">
            <Link 
              href="/" 
              className="inline-block text-2xl font-serif tracking-[0.2em] uppercase font-bold text-[#F8F5EF] hover:opacity-90 transition-opacity"
            >
              Ozone<span className="text-[#C6A15B] font-light">360</span>
            </Link>

            <p className="text-xs uppercase tracking-[0.25em] font-medium text-[#C6A15B]">
              Elegance, redefined.
            </p>

            <p className="text-sm text-[#77716A] font-light leading-relaxed max-w-sm pt-1">
              Contemporary modest fashion designed with elegance, confidence and attention to detail.
            </p>

            <div className="pt-4 flex items-center space-x-5 text-[#77716A]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C6A15B] transition-colors p-1"
                aria-label="Ozone360 Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C6A15B] transition-colors p-1"
                aria-label="Ozone360 Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.847 9 5.052V8z"/>
                </svg>
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C6A15B] transition-colors p-1"
                aria-label="Ozone360 TikTok"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.32 1.52-1.33 2.52-.01.99.47 1.96 1.28 2.53.84.59 1.96.72 2.93.38 1.05-.35 1.82-1.32 1.97-2.42.05-1.85.02-3.7.02-5.55 0-4.47.01-8.95 0-13.42z"/>
                </svg>
              </a>
            </div>
          </div>


          <div className="hidden md:grid grid-cols-3 lg:col-span-5 gap-8">
            
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#F8F5EF] block">
                SHOP
              </span>
              <ul className="space-y-3 text-xs text-[#77716A] font-light">
                <li>
                  <Link href="/products" className="hover:text-[#F8F5EF] transition-colors">
                    All Products
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#F8F5EF] block">
                COMPANY
              </span>
              <ul className="space-y-3 text-xs text-[#77716A] font-light">
                <li>
                  <Link href="/about" className="hover:text-[#F8F5EF] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#F8F5EF] transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#F8F5EF] block">
                HELP
              </span>
              <ul className="space-y-3 text-xs text-[#77716A] font-light">
                <li>
                  <Link href="/faq" className="hover:text-[#F8F5EF] transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#F8F5EF] transition-colors">
                    Client Care
                  </Link>
                </li>
              </ul>
            </div>

          </div>


          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#C6A15B] block">
              NEWSLETTER
            </span>

            <h3 className="text-base font-serif text-[#F8F5EF]">
              Stay in the Ozone360 world.
            </h3>

            <p className="text-xs text-[#77716A] font-light leading-relaxed">
              Be the first to discover new collections and selected updates.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-3 pt-1">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-[#171717] border border-[#77716A]/30 text-[#F8F5EF] px-3.5 py-2.5 text-xs placeholder-[#77716A]/60 focus:outline-none focus:border-[#C6A15B] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#F8F5EF] text-[#171717] py-2.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C6A15B] hover:text-[#171717] transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div className="p-3 bg-[#171717] border border-[#C6A15B]/40 text-[#C6A15B] text-xs font-light text-center">
                Thank you for subscribing.
              </div>
            )}
          </div>

        </div>


        <div className="md:hidden divide-y divide-[#77716A]/20 border-b border-[#77716A]/20 pb-8 mb-8">
          
          <div className="py-4">
            <button
              onClick={() => toggleSection('shop')}
              className="w-full flex items-center justify-between text-xs uppercase tracking-[0.25em] font-medium text-[#F8F5EF]"
            >
              <span>SHOP</span>
              <span className="text-[#C6A15B]">{openSections.shop ? '−' : '+'}</span>
            </button>
            {openSections.shop && (
              <ul className="pt-3 space-y-2 text-xs text-[#77716A] font-light">
                <li>
                  <Link href="/products" className="block py-1 hover:text-[#F8F5EF]">
                    All Products
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div className="py-4">
            <button
              onClick={() => toggleSection('company')}
              className="w-full flex items-center justify-between text-xs uppercase tracking-[0.25em] font-medium text-[#F8F5EF]"
            >
              <span>COMPANY</span>
              <span className="text-[#C6A15B]">{openSections.company ? '−' : '+'}</span>
            </button>
            {openSections.company && (
              <ul className="pt-3 space-y-2 text-xs text-[#77716A] font-light">
                <li>
                  <Link href="/about" className="block py-1 hover:text-[#F8F5EF]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="block py-1 hover:text-[#F8F5EF]">
                    Contact Us
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div className="py-4">
            <button
              onClick={() => toggleSection('help')}
              className="w-full flex items-center justify-between text-xs uppercase tracking-[0.25em] font-medium text-[#F8F5EF]"
            >
              <span>HELP</span>
              <span className="text-[#C6A15B]">{openSections.help ? '−' : '+'}</span>
            </button>
            {openSections.help && (
              <ul className="pt-3 space-y-2 text-xs text-[#77716A] font-light">
                <li>
                  <Link href="/faq" className="block py-1 hover:text-[#F8F5EF]">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="block py-1 hover:text-[#F8F5EF]">
                    Client Care
                  </Link>
                </li>
              </ul>
            )}
          </div>

        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#77716A] font-light">
          
          <div>
            © {new Date().getFullYear()} Ozone360. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs">
            <Link href="/faq" className="hover:text-[#F8F5EF] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/faq" className="hover:text-[#F8F5EF] transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/faq" className="hover:text-[#F8F5EF] transition-colors">
              Return Policy
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}