
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar({ cartCount = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { name: 'Shop', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen || searchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen, searchOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F5EF]/95 backdrop-blur-md h-16 shadow-sm border-b border-[#E7E1D8]/80'
            : 'bg-[#F8F5EF] h-20 border-b border-[#E7E1D8]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          
          
          <div className="flex items-center md:hidden w-1/4">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-[#171717] hover:text-[#C6A15B] transition-colors focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center">
            <Link 
              href="/" 
              className="text-2xl font-serif tracking-[0.2em] uppercase font-bold text-[#171717] hover:opacity-90 transition-opacity"
            >
              Ozone<span className="text-[#C6A15B] font-light">360</span>
            </Link>
          </div>

          <div className="flex md:hidden justify-center w-2/4 text-center">
            <Link 
              href="/" 
              className="text-xl font-serif tracking-[0.2em] uppercase font-bold text-[#171717]"
            >
              Ozone<span className="text-[#C6A15B] font-light">360</span>
            </Link>
          </div>


          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs tracking-[0.25em] uppercase font-medium transition-all relative py-1 ${
                    isActive 
                      ? 'text-[#171717] font-semibold' 
                      : 'text-[#77716A] hover:text-[#171717]'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C6A15B] transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center justify-end space-x-5 sm:space-x-6 md:w-auto w-1/4">
            
            <button
              onClick={() => setSearchOpen(true)}
              className="text-[#171717] hover:text-[#C6A15B] transition-colors focus:outline-none p-1"
              aria-label="Search Products"
            >
              <svg className="w-5 h-5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>

            <Link
              href="/cart"
              className="text-[#171717] hover:text-[#C6A15B] transition-colors relative focus:outline-none p-1 flex items-center"
              aria-label={`Shopping Bag with ${cartCount} items`}
            >
              <svg className="w-5 h-5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.25 10.5a.75.75 0 100-1.5.75.75 0 000 1.5zm7.5 0a.75.75 0 100-1.5.75.75 0 000 1.5z" />
              </svg>

              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-[#C6A15B] text-[#FFFFFF] text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center transform transition-transform duration-300 scale-100">
                  {cartCount}
                </span>
              )}
            </Link>

          </div>

        </div>
      </header>

      {searchOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#F8F5EF]/98 backdrop-blur-lg animate-fadeIn">
          <div className="max-w-4xl mx-auto w-full px-6 pt-8 pb-12">
            
            <div className="flex justify-between items-center mb-12">
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#C6A15B]">
                SEARCH OZONE360
              </span>
              <button
                onClick={() => setSearchOpen(false)}
                className="text-[#171717] hover:text-[#C6A15B] transition-colors p-2 focus:outline-none"
                aria-label="Close Search"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by collection, abaya style, gown or fabric..."
                autoFocus
                className="w-full bg-transparent border-b-2 border-[#171717] py-4 text-xl sm:text-3xl font-serif text-[#171717] placeholder-[#77716A]/50 focus:outline-none focus:border-[#C6A15B] transition-colors"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-xs uppercase tracking-[0.2em] font-medium text-[#171717] hover:text-[#C6A15B] transition-colors"
              >
                Search →
              </button>
            </form>

            <div className="mt-8 space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#77716A] block">
                Popular Searches:
              </span>
              <div className="flex flex-wrap gap-3">
                {['Silk Abaya', 'Velvet Gown', 'Bridal Collection', 'Minimalist Outerwear'].map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      setSearchQuery(term);
                      router.push(`/products?search=${encodeURIComponent(term)}`);
                      setSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="text-xs tracking-wider text-[#171717] bg-[#E7E1D8]/50 hover:bg-[#171717] hover:text-[#F8F5EF] px-4 py-2 border border-[#E7E1D8] transition-all duration-300"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      <div
        className={`fixed inset-0 z-50 bg-[#F8F5EF] transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-between ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-20 px-6 flex items-center justify-between border-b border-[#E7E1D8]">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl font-serif tracking-[0.2em] uppercase font-bold text-[#171717]"
          >
            Ozone<span className="text-[#C6A15B] font-light">360</span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#171717] hover:text-[#C6A15B] transition-colors p-2 focus:outline-none"
            aria-label="Close Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-8 py-12 flex-1 flex flex-col justify-center space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#C6A15B]">
            NAVIGATION
          </span>

          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-serif tracking-wider uppercase transition-colors flex items-center justify-between ${
                    isActive ? 'text-[#171717] font-bold' : 'text-[#77716A] hover:text-[#171717]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#C6A15B]" />}
                </Link>
              );
            })}
          </nav>

          <div className="h-[1px] bg-[#E7E1D8] w-full my-6" />

          <div>
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full bg-[#171717] text-[#F8F5EF] py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C6A15B] hover:text-[#171717] transition-all duration-300"
            >
              Explore Collection
            </Link>
          </div>
        </div>

        <div className="p-8 border-t border-[#E7E1D8] bg-[#F8F5EF] text-center">
          <p className="text-xs text-[#77716A] tracking-widest uppercase font-light">
            International Modern Modest Fashion
          </p>
        </div>
      </div>
    </>
  );
}