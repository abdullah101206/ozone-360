'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

const FAQ_DATA = [
  // Orders
  {
    id: 'order-1',
    category: 'Orders',
    question: 'How can I place an order?',
    answer: 'Browse the collection, select your preferred product and options, add it to your shopping bag, and proceed to checkout.',
  },
  {
    id: 'order-2',
    category: 'Orders',
    question: 'Can I change my order after placing it?',
    answer: 'Orders are processed as quickly as possible. Contact customer support as soon as possible if you need to request a change.',
  },
  {
    id: 'order-3',
    category: 'Orders',
    question: 'How can I check my order status?',
    answer: 'Order tracking information can be provided according to the available shipping service once the order has been processed.',
  },

  // Products
  {
    id: 'product-1',
    category: 'Products',
    question: 'What materials are used in Ozone360 products?',
    answer: 'Product materials vary by design. Please check the individual product page for specific fabric and material information.',
  },
  {
    id: 'product-2',
    category: 'Products',
    question: 'How do I choose the right size?',
    answer: 'Each product page should provide available sizing information. Customers should review the size details before ordering.',
  },
  {
    id: 'product-3',
    category: 'Products',
    question: 'Are product colors exactly as shown online?',
    answer: 'Product colors may vary slightly depending on screen settings and lighting. Product photography is intended to represent the actual color as accurately as possible.',
  },

  {
    id: 'shipping-1',
    category: 'Shipping',
    question: 'Do you offer international shipping?',
    answer: 'Ozone360 is designed for an international customer base. Available shipping destinations and options should be confirmed according to the current shipping policy.',
  },
  {
    id: 'shipping-2',
    category: 'Shipping',
    question: 'How long does delivery take?',
    answer: 'Delivery times depend on destination and shipping method. Customers should refer to the applicable shipping information provided during checkout.',
  },
  {
    id: 'shipping-3',
    category: 'Shipping',
    question: 'Will I receive tracking information?',
    answer: 'Where tracking is available, tracking details will be provided after the order has been dispatched.',
  },

  {
    id: 'return-1',
    category: 'Returns',
    question: 'What is your return policy?',
    answer: 'Customers should review the Ozone360 Return Policy for the current eligibility requirements, timeframe and return process.',
  },
  {
    id: 'return-2',
    category: 'Returns',
    question: 'Can I return an item if the size is not right?',
    answer: 'Return eligibility depends on the applicable return policy and the condition of the item.',
  },
  {
    id: 'return-3',
    category: 'Returns',
    question: 'How do I request a return?',
    answer: 'Customers can contact Ozone360 support to begin the return process according to the current return policy.',
  },

  // Payments
  {
    id: 'payment-1',
    category: 'Payments',
    question: 'What payment methods are available?',
    answer: 'Available payment methods will be displayed during checkout based on the customer\'s location and the payment options enabled by Ozone360.',
  },
  {
    id: 'payment-2',
    category: 'Payments',
    question: 'Is my payment information secure?',
    answer: 'Payments should be processed through secure payment infrastructure. Do not claim specific certifications or security providers unless they are actually implemented.',
  },
];

const CATEGORIES = ['All', 'Orders', 'Shipping', 'Products', 'Returns', 'Payments'];

export default function FAQPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category.toLowerCase() === selectedCategory.toLowerCase();

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#171717] font-sans antialiased selection:bg-[#C6A15B] selection:text-white flex flex-col justify-between">
      
      <div>
        <header className="sticky top-0 z-50 bg-[#F8F5EF]/90 backdrop-blur-md border-b border-[#E7E1D8]/60 transition-all">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
            <Link href="/" className="text-2xl font-serif tracking-[0.2em] uppercase font-bold text-[#171717]">
              Ozone<span className="text-[#C6A15B]">360</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-10 text-xs tracking-[0.25em] uppercase font-medium text-[#77716A]">
              <Link href="/" className="hover:text-[#171717] transition-colors">Home</Link>
              <Link href="/products" className="hover:text-[#171717] transition-colors">Collection</Link>
              <Link href="/about" className="hover:text-[#171717] transition-colors">About Us</Link>
              <Link href="/faq" className="text-[#171717] font-semibold underline underline-offset-8 decoration-[#C6A15B]">FAQ</Link>
              <Link href="/contact" className="hover:text-[#171717] transition-colors">Contact</Link>
            </nav>

            <div className="hidden md:block">
              <Link 
                href="/products" 
                className="inline-block border border-[#171717] text-[#171717] px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#171717] hover:text-[#F8F5EF] transition-all duration-300"
              >
                Shop Collection
              </Link>
            </div>

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

          {mobileMenuOpen && (
            <div className="md:hidden bg-[#F8F5EF] border-b border-[#E7E1D8] px-6 py-6 space-y-4">
              <Link href="/" className="block text-xs uppercase tracking-[0.2em] text-[#77716A] hover:text-[#171717]">Home</Link>
              <Link href="/products" className="block text-xs uppercase tracking-[0.2em] text-[#77716A] hover:text-[#171717]">Collection</Link>
              <Link href="/about" className="block text-xs uppercase tracking-[0.2em] text-[#77716A] hover:text-[#171717]">About Us</Link>
              <Link href="/faq" className="block text-xs uppercase tracking-[0.2em] text-[#171717] font-semibold">FAQ</Link>
              <Link href="/contact" className="block text-xs uppercase tracking-[0.2em] text-[#77716A] hover:text-[#171717]">Contact</Link>
              <Link 
                href="/products" 
                className="block text-center border border-[#171717] text-[#171717] py-3 text-xs uppercase tracking-[0.2em] font-medium mt-4"
              >
                Shop Collection
              </Link>
            </div>
          )}
        </header>

        <section className="pt-16 sm:pt-24 pb-8 sm:pb-12 text-center border-b border-[#E7E1D8]/60">
          <div className="max-w-3xl mx-auto px-6 sm:px-8">
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#C6A15B] block mb-4">
              HELP & SUPPORT
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#171717] leading-[1.15]">
              Frequently Asked Questions
            </h1>

            <p className="text-sm sm:text-base text-[#77716A] leading-relaxed font-light mt-4 max-w-xl mx-auto">
              Find answers to the most common questions about our collection, orders and shopping experience.
            </p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 sm:px-8 pt-10 sm:pt-14 pb-12 sm:pb-16">
          
          {/* 2. SEARCH FIELD */}
          <div className="relative mb-10">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#77716A]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your question..."
              className="w-full bg-[#FFFFFF] border border-[#E7E1D8] text-[#171717] pl-11 pr-4 py-3.5 text-sm placeholder-[#77716A]/60 focus:outline-none focus:border-[#C6A15B] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-[#77716A] hover:text-[#171717]"
              >
                Clear
              </button>
            )}
          </div>

          <div className="border-b border-[#E7E1D8] mb-12">
            <div className="flex items-center space-x-6 sm:space-x-8 overflow-x-auto no-scrollbar scrollbar-none pb-3 -mb-px">
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`whitespace-nowrap pb-3 text-xs uppercase tracking-[0.2em] font-medium transition-all relative ${
                      isActive
                        ? 'text-[#171717] font-semibold'
                        : 'text-[#77716A] hover:text-[#171717]'
                    }`}
                  >
                    {category}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C6A15B]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-0 border-t border-[#E7E1D8]">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div key={faq.id} className="border-b border-[#E7E1D8]">
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg font-serif text-[#171717] group-hover:text-[#C6A15B] transition-colors pr-6">
                        {faq.question}
                      </span>
                      <span className="text-[#171717] group-hover:text-[#C6A15B] transition-colors flex-shrink-0">
                        {isOpen ? (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 12H4" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
                          </svg>
                        )}
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0 pb-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm text-[#77716A] font-light leading-relaxed max-w-2xl">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="py-16 text-center space-y-3 border-b border-[#E7E1D8]">
                <p className="text-base sm:text-lg font-serif text-[#171717]">
                  No results found
                </p>
                <p className="text-xs sm:text-sm text-[#77716A] font-light">
                  Try searching with a different keyword or select another category.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="mt-2 text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-medium hover:underline"
                >
                  Reset Search & Filters
                </button>
              </div>
            )}
          </div>

        </section>

        <section className="py-16 sm:py-20 bg-[#FFFFFF] border-t border-b border-[#E7E1D8]">
          <div className="max-w-2xl mx-auto px-6 sm:px-8 text-center space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#C6A15B] block">
              CLIENT CONCIERGE
            </span>

            <h2 className="text-2xl sm:text-3xl font-serif text-[#171717]">
              Still Have Questions?
            </h2>

            <p className="text-sm text-[#77716A] font-light max-w-md mx-auto leading-relaxed">
              Our team is here to help with questions about products, orders and your shopping experience.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-[#171717] text-[#F8F5EF] px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C6A15B] hover:text-[#171717] transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link
                href="/products"
                className="w-full sm:w-auto border border-[#171717] text-[#171717] px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#171717] hover:text-[#F8F5EF] transition-all duration-300"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </section>

      </div>

      <footer className="bg-[#171717] text-[#77716A] border-t border-[#77716A]/20 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-lg font-serif tracking-[0.2em] uppercase font-bold text-[#F8F5EF]">
            Ozone<span className="text-[#C6A15B]">360</span>
          </div>

          <div className="text-xs text-[#77716A] tracking-wider font-light">
            © {new Date().getFullYear()} Ozone360 Modest Fashion. All rights reserved.
          </div>

          <div className="flex space-x-6 text-xs uppercase tracking-widest">
            <Link href="#" className="hover:text-[#F8F5EF] transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-[#F8F5EF] transition-colors">Terms</Link>
            <Link href="#" className="hover:text-[#F8F5EF] transition-colors">Instagram</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}