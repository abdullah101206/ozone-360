'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative bg-[#F8F5EF] text-[#171717] pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 min-h-[90vh] flex flex-col justify-between overflow-hidden antialiased font-sans border-b border-[#E7E1D8]/80 selection:bg-[#C6A15B] selection:text-white">

      <div className="absolute right-0 top-0 w-1/3 h-full bg-[#E7E1D8]/20 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left pr-0 lg:pr-4">

            <div
              className={`flex items-center space-x-3 transition-all duration-700 delay-100 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              <span className="h-[1px] w-8 bg-[#C6A15B]" />
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#C6A15B]">
                OZONE360 — 2026 COLLECTION
              </span>
            </div>

            <div
              className={`space-y-2 transition-all duration-700 delay-200 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-[#171717] leading-[1.08] tracking-tight">
                Elegance, <br className="hidden sm:inline" />
                <span className="italic font-light text-[#77716A]">Redefined.</span>
              </h1>
            </div>

            <p
              className={`text-sm sm:text-base text-[#77716A] font-light leading-relaxed max-w-md transition-all duration-700 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              Discover refined abayas and gowns designed for women who appreciate timeless style, effortless confidence and modern modest fashion.
            </p>

            <div
              className={`pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-700 delay-400 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              <Link
                href="/products"
                className="inline-flex justify-center items-center bg-[#171717] text-[#F8F5EF] px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C6A15B] hover:text-[#171717] transition-all duration-300 shadow-sm"
              >
                Shop Collection
              </Link>

              <Link
                href="/about"
                className="inline-flex justify-center items-center text-[#171717] hover:text-[#C6A15B] text-xs uppercase tracking-[0.2em] font-medium group transition-colors py-2"
              >
                <span>Discover Ozone360</span>
                <span className="ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300">
                  →
                </span>
              </Link>
            </div>

            <div
              className={`pt-6 border-t border-[#E7E1D8] flex items-center justify-between text-xs text-[#77716A] tracking-wider uppercase font-light transition-all duration-700 delay-500 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              <span>01 / INTERNATIONAL EDITION</span>
              <span className="text-[#C6A15B]">ABAYA & GOWN FASHION</span>
            </div>

          </div>


          <div
            className={`lg:col-span-6 relative transition-all duration-1000 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none w-full bg-[#E7E1D8] overflow-hidden shadow-2xl border border-[#E7E1D8]/60 group">

              <img
                src="https://images.pexels.com/photos/35324632/pexels-photo-35324632.jpeg?auto=compress&cs=tinysrgb&w=800&q=75"
                alt="Ozone360 Luxury Abaya & Gown Fashion"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/40 via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-6 left-6 text-[#F8F5EF] space-y-1 z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#C6A15B] block">
                  FEATURED PIECE
                </span>
                <p className="text-xs font-serif tracking-wider font-light uppercase">
                  THE SILK NOIR GOWN
                </p>
              </div>

              <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden xl:block text-[10px] uppercase tracking-[0.3em] text-[#F8F5EF]/80 font-light rotate-90 origin-right">
                OZONE360 / COUTURE
              </div>

            </div>

            <div className="absolute -bottom-4 -left-4 w-full h-full border border-[#C6A15B]/30 pointer-events-none hidden sm:block -z-10" />
          </div>

        </div>
      </div>

      <div
        className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-8 flex justify-between items-end transition-opacity duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <div className="flex items-center space-x-3 text-[#77716A]">
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium">
            SCROLL TO DISCOVER
          </span>
          <svg className="w-3.5 h-3.5 animate-bounce text-[#C6A15B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </div>

        <div className="hidden sm:block text-[10px] uppercase tracking-[0.25em] font-medium text-[#77716A]">
          UK • USA • AUSTRALIA • GLOBAL
        </div>
      </div>

    </section>
  );
}