// app/about/page.js
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function AboutUsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Unsplash images selected specifically for high-end modest fashion aesthetic
  const images = {
    hero: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop',
    story: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop',
    philosophy: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
    modernWoman: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1600&auto=format&fit=crop',
    craftDetail: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop',
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#171717] font-sans antialiased selection:bg-[#C6A15B] selection:text-white">
      
      {/* ------------------------------------------------------------- */}
      {/* NAVIGATION BAR                                                */}
      {/* ------------------------------------------------------------- */}
      <header className="sticky top-0 z-50 bg-[#F8F5EF]/90 backdrop-blur-md border-b border-[#E7E1D8]/60 transition-all">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          <a href="#" className="text-2xl font-serif tracking-[0.2em] uppercase font-bold text-[#171717]">
            Ozone<span className="text-[#C6A15B]">360</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10 text-xs tracking-[0.25em] uppercase font-medium text-[#77716A]">
            <a href="#" className="hover:text-[#171717] transition-colors">Home</a>
            <a href="#" className="hover:text-[#171717] transition-colors">Collection</a>
            <a href="#" className="text-[#171717] font-semibold underline underline-offset-8 decoration-[#C6A15B]">About Us</a>
            <a href="#" className="hover:text-[#171717] transition-colors">Contact</a>
          </nav>

          {/* Desktop Call To Action */}
          <div className="hidden md:block">
            <a 
              href="#cta" 
              className="inline-block border border-[#171717] text-[#171717] px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#171717] hover:text-[#F8F5EF] transition-all duration-300"
            >
              Shop Collection
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#171717] focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F8F5EF] border-b border-[#E7E1D8] px-6 py-6 space-y-4">
            <a href="#" className="block text-xs uppercase tracking-[0.2em] text-[#77716A] hover:text-[#171717]">Home</a>
            <a href="#" className="block text-xs uppercase tracking-[0.2em] text-[#77716A] hover:text-[#171717]">Collection</a>
            <a href="#" className="block text-xs uppercase tracking-[0.2em] text-[#171717] font-semibold">About Us</a>
            <a href="#" className="block text-xs uppercase tracking-[0.2em] text-[#77716A] hover:text-[#171717]">Contact</a>
            <a 
              href="#cta" 
              className="block text-center border border-[#171717] text-[#171717] py-3 text-xs uppercase tracking-[0.2em] font-medium mt-4"
            >
              Shop Collection
            </a>
          </div>
        )}
      </header>


      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION                                              */}
      {/* ------------------------------------------------------------- */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 border-b border-[#E7E1D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Typography */}
            <div className="lg:col-span-7 space-y-6 z-10">
              <div className="inline-flex items-center space-x-3">
                <span className="h-[1px] w-8 bg-[#C6A15B]"></span>
                <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#77716A]">
                  About Ozone360
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-[#171717] leading-[1.1]">
                Elegance, <br />
                <span className="italic font-normal text-[#77716A]">Redefined.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#77716A] leading-relaxed max-w-xl font-light pt-2">
                Ozone360 crafts contemporary modest fashion tailored for the modern woman. 
                We bring together sophisticated silhouettes, graceful draping, and uncompromising 
                quality to elevate your daily wardrobe across global horizons.
              </p>

              <div className="pt-4 flex items-center space-x-6 text-xs tracking-[0.2em] text-[#77716A] uppercase">
                <span>International Delivery</span>
                <span>•</span>
                <span>Bespoke Quality</span>
              </div>
            </div>

            {/* Right Column: Hero Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none">
                {/* Thin Decorative Gold Frame Offset */}
                <div className="absolute -inset-2 border border-[#C6A15B]/40 translate-x-3 translate-y-3 pointer-events-none"></div>
                <div className="relative h-full w-full overflow-hidden bg-[#E7E1D8]">
                  <Image 
                    src={images.hero} 
                    alt="Ozone360 Editorial Modest Fashion Abaya" 
                    fill 
                    className="object-cover object-top filter contrast-[1.02] hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ------------------------------------------------------------- */}
      {/* 2. OUR STORY SECTION                                         */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#F8F5EF] border-b border-[#E7E1D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#E7E1D8]">
              <Image 
                src={images.story} 
                alt="Craftsmanship and fabric of Ozone360 abaya" 
                fill 
                className="object-cover filter contrast-[1.02] hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#C6A15B] block">
                Our Narrative
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171717] tracking-tight">
                Our Story
              </h2>
              
              <div className="w-12 h-[1px] bg-[#C6A15B]"></div>

              <div className="space-y-4 text-base text-[#77716A] leading-relaxed font-light pt-2">
                <p>
                  Ozone360 was envisioned to fill a distinct gap in global fashion—delivering modern, 
                  high-fashion abayas and gowns that honor modesty without sacrificing contemporary aesthetics. 
                  We believe modest attire should project poise, power, and graceful simplicity.
                </p>
                <p>
                  Every piece we offer is a celebration of thoughtful design. From initial sketch to 
                  final stitch, our garments are crafted to transition seamlessly between formal occasions 
                  and refined daily living for women across the UK, USA, Australia, and worldwide.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ------------------------------------------------------------- */}
      {/* 3. OUR PHILOSOPHY SECTION                                    */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#F8F5EF] border-b border-[#E7E1D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-2xl mb-16 sm:mb-24">
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#77716A] block mb-3">
              Guiding Ethos
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#171717]">
              Our Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Principle 01 */}
            <div className="border-t border-[#E7E1D8] pt-8 space-y-4">
              <span className="text-xs font-mono tracking-widest text-[#C6A15B] block">01</span>
              <h3 className="text-xl sm:text-2xl font-serif text-[#171717]">Elegance</h3>
              <p className="text-sm text-[#77716A] leading-relaxed font-light">
                Timeless designs that feel refined and effortless. We prioritize fluid lines, tailored proportions, and understated grace over short-lived trends.
              </p>
            </div>

            {/* Principle 02 */}
            <div className="border-t border-[#E7E1D8] pt-8 space-y-4">
              <span className="text-xs font-mono tracking-widest text-[#C6A15B] block">02</span>
              <h3 className="text-xl sm:text-2xl font-serif text-[#171717]">Quality</h3>
              <p className="text-sm text-[#77716A] leading-relaxed font-light">
                Thoughtful materials, flawless stitching, and meticulous finishing. Every garment undergoes rigorous standards to ensure lasting beauty.
              </p>
            </div>

            {/* Principle 03 */}
            <div className="border-t border-[#E7E1D8] pt-8 space-y-4">
              <span className="text-xs font-mono tracking-widest text-[#C6A15B] block">03</span>
              <h3 className="text-xl sm:text-2xl font-serif text-[#171717]">Confidence</h3>
              <p className="text-sm text-[#77716A] leading-relaxed font-light">
                Fashion designed to help women feel confident, empowered, and fully comfortable in their identity, anywhere in the world.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ------------------------------------------------------------- */}
      {/* 4. DESIGNED FOR MODERN WOMEN SECTION                        */}
      {/* ------------------------------------------------------------- */}
      <section className="relative py-24 sm:py-32 lg:py-40 bg-[#171717] text-[#F8F5EF] overflow-hidden">
        
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-25">
          <Image 
            src={images.modernWoman} 
            alt="Modern modest fashion banner" 
            fill 
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C6A15B] font-medium block">
              Versatility & Purpose
            </span>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif leading-tight">
              Made for the way women live today.
            </h2>
            
            <p className="text-base sm:text-lg text-[#E7E1D8]/80 font-light leading-relaxed max-w-2xl mx-auto pt-2">
              Modern modest fashion is dynamic. Ozone360 seamlessly marries traditional modesty with 
              global contemporary styling—creating versatile abayas, gowns, and layered silhouettes tailored for 
              executive boardrooms, evening gatherings, and everywhere in between.
            </p>
            
            <div className="pt-6">
              <div className="inline-block h-[1px] w-16 bg-[#C6A15B]"></div>
            </div>
          </div>
        </div>
      </section>


      {/* ------------------------------------------------------------- */}
      {/* 5. CRAFT & DETAIL SECTION                                    */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#F8F5EF] border-b border-[#E7E1D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#77716A] block mb-3">
                  Uncompromising Standards
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171717]">
                  Craft & Detail
                </h2>
              </div>

              <p className="text-base text-[#77716A] leading-relaxed font-light">
                True luxury lies in what is subtly noticed: the weight of a drape, the breathability of premium crepe, 
                and the precision of hand-finished hems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <h4 className="font-serif text-lg text-[#171717]">Fabric Selection</h4>
                  <p className="text-xs text-[#77716A] leading-relaxed font-light">
                    Sourced for longevity, softness, and elegant fluid motion during daily wear.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif text-lg text-[#171717]">Precision Silhouette</h4>
                  <p className="text-xs text-[#77716A] leading-relaxed font-light">
                    Balanced cuts that offer full coverage while maintaining a modern, structured drape.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif text-lg text-[#171717]">Refined Finishing</h4>
                  <p className="text-xs text-[#77716A] leading-relaxed font-light">
                    Clean seams, subtle cuffs, and concealed closures designed for effortless elegance.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif text-lg text-[#171717]">Comfortable Wear</h4>
                  <p className="text-xs text-[#77716A] leading-relaxed font-light">
                    Lightweight construction built for all-day ease across varied global climates.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Close-up Detail Image */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#E7E1D8]">
                <Image 
                  src={images.craftDetail} 
                  alt="Detail close up of Ozone360 luxury fabric and stitching" 
                  fill 
                  className="object-cover filter contrast-[1.02] hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ------------------------------------------------------------- */}
      {/* 6. GLOBAL VISION SECTION                                     */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-[#F8F5EF] border-b border-[#E7E1D8]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#C6A15B] block">
            International Outlook
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171717]">
            A Modern Modest Fashion House
          </h2>
          
          <p className="text-base text-[#77716A] font-light leading-relaxed max-w-2xl mx-auto">
            Ozone360 serves an international community of women who value quiet luxury. 
            Designed with global sensibilities, our collections connect high fashion with classic modesty 
            for clients across North America, Europe, Australia, and the Middle East.
          </p>

          <div className="pt-8 flex flex-wrap justify-center gap-8 text-xs tracking-[0.25em] uppercase text-[#77716A]">
            <span>United Kingdom</span>
            <span>•</span>
            <span>United States</span>
            <span>•</span>
            <span>Australia</span>
            <span>•</span>
            <span>Worldwide</span>
          </div>
        </div>
      </section>


      {/* ------------------------------------------------------------- */}
      {/* 7. FINAL CALL TO ACTION                                      */}
      {/* ------------------------------------------------------------- */}
      <section id="cta" className="py-24 sm:py-32 bg-[#171717] text-[#F8F5EF]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-8">
          
          <div className="inline-block w-10 h-[1px] bg-[#C6A15B]"></div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight">
            Discover Your Signature Style.
          </h2>

          <p className="text-sm sm:text-base text-[#E7E1D8]/80 font-light max-w-lg mx-auto leading-relaxed">
            Explore our latest release of meticulously tailored abayas, gowns, and modest outerwear.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#" 
              className="w-full sm:w-auto bg-[#F8F5EF] text-[#171717] px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C6A15B] hover:text-[#171717] transition-all duration-300"
            >
              Explore Collection
            </a>
            <a 
              href="#" 
              className="w-full sm:w-auto border border-[#E7E1D8]/40 text-[#F8F5EF] px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:border-[#F8F5EF] hover:bg-[#F8F5EF]/10 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>

        </div>
      </section>


      {/* ------------------------------------------------------------- */}
      {/* FOOTER                                                        */}
      {/* ------------------------------------------------------------- */}
      <footer className="bg-[#171717] text-[#77716A] border-t border-[#77716A]/20 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-lg font-serif tracking-[0.2em] uppercase font-bold text-[#F8F5EF]">
            Ozone<span className="text-[#C6A15B]">360</span>
          </div>

          <div className="text-xs text-[#77716A] tracking-wider font-light">
            © {new Date().getFullYear()} Ozone360 Modest Fashion. All rights reserved.
          </div>

          <div className="flex space-x-6 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-[#F8F5EF] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#F8F5EF] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#F8F5EF] transition-colors">Instagram</a>
          </div>
        </div>
      </footer>

    </div>
  );
}