'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const images = {
    hero: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    editorial: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1600&auto=format&fit=crop',
  };

  // Handle Form Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'Please enter your first name.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Please enter your last name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

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
              <Link href="/contact" className="text-[#171717] font-semibold underline underline-offset-8 decoration-[#C6A15B]">Contact</Link>
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
              <Link href="/contact" className="block text-xs uppercase tracking-[0.2em] text-[#171717] font-semibold">Contact</Link>
              <Link 
                href="/products" 
                className="block text-center border border-[#171717] text-[#171717] py-3 text-xs uppercase tracking-[0.2em] font-medium mt-4"
              >
                Shop Collection
              </Link>
            </div>
          )}
        </header>

        <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28 border-b border-[#E7E1D8]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-3">
                  <span className="h-[1px] w-8 bg-[#C6A15B]"></span>
                  <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#77716A]">
                    GET IN TOUCH
                  </span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-[#171717] leading-[1.1]">
                  We'd Love to <br />
                  <span className="italic font-normal text-[#77716A]">Hear From You.</span>
                </h1>

                <p className="text-base sm:text-lg text-[#77716A] leading-relaxed max-w-xl font-light pt-2">
                  Whether you have a question about our collection, your order, or anything else, our team is here to help.
                </p>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none">
                  <div className="absolute -inset-2 border border-[#C6A15B]/40 translate-x-3 translate-y-3 pointer-events-none"></div>
                  <div className="relative h-full w-full overflow-hidden bg-[#E7E1D8]">
                    <Image 
                      src={images.hero} 
                      alt="Ozone360 Luxury Fashion Client Support" 
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


        <section className="py-20 sm:py-28 lg:py-32 border-b border-[#E7E1D8]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              
              <div className="lg:col-span-5 space-y-10">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#C6A15B] block mb-3">
                    CLIENT CARE
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#171717]">
                    Customer Support
                  </h2>
                </div>

                <div className="space-y-8 pt-2">
                  <div className="border-t border-[#E7E1D8] pt-6 space-y-2">
                    <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#77716A] block">
                      Email Address
                    </span>
                    <a 
                      href="mailto:support@ozone360.com" 
                      className="text-base sm:text-lg font-serif text-[#171717] hover:text-[#C6A15B] transition-colors block"
                    >
                      support@ozone360.com
                    </a>
                    <p className="text-xs text-[#77716A] font-light">
                      Our concierge team typically responds within 24 business hours.
                    </p>
                  </div>

                  <div className="border-t border-[#E7E1D8] pt-6 space-y-2">
                    <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#77716A] block">
                      Phone Line
                    </span>
                    <p className="text-base sm:text-lg font-serif text-[#171717]">
                      +1 (000) 000-0000
                    </p>
                    <p className="text-xs text-[#77716A] font-light">
                      For urgent collection queries or order modifications.
                    </p>
                  </div>
                  {/* Availability */}
                  <div className="border-t border-[#E7E1D8] pt-6 space-y-2">
                    <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#77716A] block">
                      Service Hours
                    </span>
                    <p className="text-sm font-medium text-[#171717]">
                      Monday - Friday
                    </p>
                    <p className="text-xs text-[#77716A] font-light">
                      9:00 AM - 6:00 PM (GMT)
                    </p>
                  </div>
                </div>
              </div>


              <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E7E1D8] p-8 sm:p-12">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-serif text-[#171717]">
                        Send Us a Message
                      </h2>
                      <p className="text-xs sm:text-sm text-[#77716A] font-light pt-1">
                        Fill in your details below and our client services team will assist you.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                      <div>
                        <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#171717] mb-2">
                          First Name <span className="text-[#C6A15B]">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Jane"
                          className={`w-full bg-[#F8F5EF] border ${
                            errors.firstName ? 'border-red-500' : 'border-[#E7E1D8]'
                          } text-[#171717] px-4 py-3.5 text-sm focus:outline-none focus:border-[#C6A15B] transition-colors`}
                        />
                        {errors.firstName && (
                          <p className="text-xs text-red-500 mt-1.5 font-light">{errors.firstName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#171717] mb-2">
                          Last Name <span className="text-[#C6A15B]">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Doe"
                          className={`w-full bg-[#F8F5EF] border ${
                            errors.lastName ? 'border-red-500' : 'border-[#E7E1D8]'
                          } text-[#171717] px-4 py-3.5 text-sm focus:outline-none focus:border-[#C6A15B] transition-colors`}
                        />
                        {errors.lastName && (
                          <p className="text-xs text-red-500 mt-1.5 font-light">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#171717] mb-2">
                        Email Address <span className="text-[#C6A15B]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@domain.com"
                        className={`w-full bg-[#F8F5EF] border ${
                          errors.email ? 'border-red-500' : 'border-[#E7E1D8]'
                        } text-[#171717] px-4 py-3.5 text-sm focus:outline-none focus:border-[#C6A15B] transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1.5 font-light">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#171717] mb-2">
                        Subject <span className="text-[#C6A15B]">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Sizing enquiry, Custom order, etc."
                        className={`w-full bg-[#F8F5EF] border ${
                          errors.subject ? 'border-red-500' : 'border-[#E7E1D8]'
                        } text-[#171717] px-4 py-3.5 text-sm focus:outline-none focus:border-[#C6A15B] transition-colors`}
                      />
                      {errors.subject && (
                        <p className="text-xs text-red-500 mt-1.5 font-light">{errors.subject}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.15em] font-medium text-[#171717] mb-2">
                        Message <span className="text-[#C6A15B]">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we assist you today?"
                        className={`w-full bg-[#F8F5EF] border ${
                          errors.message ? 'border-red-500' : 'border-[#E7E1D8]'
                        } text-[#171717] px-4 py-3.5 text-sm focus:outline-none focus:border-[#C6A15B] transition-colors resize-none`}
                      ></textarea>
                      {errors.message && (
                        <p className="text-xs text-red-500 mt-1.5 font-light">{errors.message}</p>
                      )}
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-[#171717] text-[#F8F5EF] py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C6A15B] hover:text-[#171717] transition-all duration-300 focus:outline-none"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="py-12 text-center space-y-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F8F5EF] border border-[#C6A15B]/40 text-[#C6A15B] mx-auto">
                      ✓
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#C6A15B] block">
                        MESSAGE RECEIVED
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-serif text-[#171717]">
                        Thank you for reaching out.
                      </h3>
                      <p className="text-sm text-[#77716A] font-light max-w-md mx-auto leading-relaxed pt-1">
                        We've received your message and will get back to you as soon as possible.
                      </p>
                    </div>

                    <div className="pt-6">
                      <button
                        onClick={handleReset}
                        className="border border-[#171717] text-[#171717] px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#171717] hover:text-[#F8F5EF] transition-all duration-300 focus:outline-none"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>


        <section className="py-16 bg-[#F8F5EF] border-b border-[#E7E1D8]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-serif text-[#171717]">
              Looking for a quick answer?
            </h3>
            <p className="text-sm text-[#77716A] font-light max-w-lg mx-auto">
              You may find what you're looking for in our frequently asked questions regarding international shipping, sizing, and bespoke care.
            </p>
            <div className="pt-2">
              <Link
                href="/faq"
                className="inline-block border-b border-[#171717] text-[#171717] pb-1 text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C6A15B] hover:border-[#C6A15B] transition-colors"
              >
                Visit FAQ →
              </Link>
            </div>
          </div>
        </section>

        <section className="relative py-28 sm:py-36 bg-[#171717] text-[#F8F5EF] overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30">
            <Image 
              src={images.editorial} 
              alt="Ozone360 Modest Fashion Editorial" 
              fill 
              className="object-cover object-center"
            />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C6A15B] font-medium block">
              OZONE360 HOUSE
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif leading-tight">
              Elegance begins with the details.
            </h2>

            <p className="text-base sm:text-lg text-[#E7E1D8]/80 font-light max-w-xl mx-auto leading-relaxed pt-1">
              Discover thoughtfully designed pieces created for modern modest style.
            </p>

            <div className="pt-6">
              <Link
                href="/products"
                className="inline-block bg-[#F8F5EF] text-[#171717] px-9 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C6A15B] hover:text-[#171717] transition-all duration-300"
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