// app/cart/page.js
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';

export default function CartPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { cartItems = [], removeFromCart, updateQuantity } = useCart();

  const subtotal = (cartItems || []).reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0
  );
  const shipping = 0;
  const estimatedTax = 0;
  const total = subtotal + shipping + estimatedTax;

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#171717] font-sans antialiased flex flex-col justify-between">
      <div>
        <header className="sticky top-0 z-50 bg-[#F8F5EF]/90 backdrop-blur-md border-b border-[#E7E1D8]/60">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
            <Link href="/" className="text-2xl font-serif tracking-[0.2em] uppercase font-bold text-[#171717]">
              Ozone<span className="text-[#C6A15B]">360</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-10 text-xs tracking-[0.25em] uppercase font-medium text-[#77716A]">
              <Link href="/" className="hover:text-[#171717] transition-colors">Home</Link>
              <Link href="/products" className="hover:text-[#171717] transition-colors">Collection</Link>
              <Link href="/about" className="hover:text-[#171717] transition-colors">About Us</Link>
            </nav>

            <div className="hidden md:flex items-center space-x-6">
              <Link 
                href="/cart" 
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#171717] flex items-center space-x-2 underline underline-offset-8 decoration-[#C6A15B]"
              >
                <span>Shopping Bag</span>
                <span className="text-[10px] font-mono bg-[#171717] text-[#F8F5EF] rounded-full w-5 h-5 flex items-center justify-center">
                  {(cartItems || []).reduce((acc, item) => acc + (item.quantity || 1), 0)}
                </span>
              </Link>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#171717] focus:outline-none"
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
        </header>

        <section className="pt-12 pb-8 sm:pt-16 sm:pb-12 border-b border-[#E7E1D8]/80">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#77716A] block">
                YOUR SHOPPING BAG
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif text-[#171717] tracking-tight">
                Shopping Bag
              </h1>
            </div>
          </div>
        </section>

        <main className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            {cartItems.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                <div className="lg:col-span-7 divide-y divide-[#E7E1D8]">
                  {cartItems.map((item) => (
                    <div key={item.id} className="py-8 first:pt-0 last:pb-0">
                      <div className="flex flex-col sm:flex-row gap-6">
                        {item.image && (
                          <div className="relative aspect-[3/4] w-28 sm:w-36 flex-shrink-0 bg-[#E7E1D8] overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.name || 'Product'}
                              fill
                              className="object-cover object-top"
                            />
                          </div>
                        )}

                        <div className="flex-1 flex flex-col justify-between space-y-4">
                          <div className="space-y-1">
                            <div className="flex justify-between items-start gap-4">
                              <h3 className="font-serif text-lg sm:text-xl text-[#171717]">
                                {item.name}
                              </h3>
                              <p className="font-serif text-base sm:text-lg text-[#171717] font-medium">
                                ${item.price * item.quantity}
                              </p>
                            </div>
                            <p className="text-xs text-[#77716A] font-light pt-1">
                              Size: <strong className="text-[#171717]">{item.selectedSize || item.size || 'M'}</strong>
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-2">
                            <div className="inline-flex items-center border border-[#E7E1D8] bg-[#F8F5EF]">
                              <button
                                onClick={() => updateQuantity && updateQuantity(item.id, item.quantity - 1)}
                                className="w-9 h-9 flex items-center justify-center text-sm text-[#171717]"
                              >
                                −
                              </button>
                              <span className="w-10 text-center text-xs font-mono font-medium text-[#171717]">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity && updateQuantity(item.id, item.quantity + 1)}
                                className="w-9 h-9 flex items-center justify-center text-sm text-[#171717]"
                              >
                                +
                              </button>
                            </div>

                            <button
                              onClick={() => removeFromCart && removeFromCart(item.id)}
                              className="text-xs uppercase tracking-[0.2em] text-[#77716A] hover:text-[#171717]"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-5 lg:sticky lg:top-28">
                  <div className="bg-[#FFFFFF] border border-[#E7E1D8] p-8 space-y-6">
                    <h2 className="font-serif text-2xl text-[#171717] border-b border-[#E7E1D8] pb-4">
                      Order Summary
                    </h2>

                    <div className="space-y-4 text-sm text-[#77716A] font-light">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span className="font-mono text-[#171717]">${subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span className="text-[#C6A15B] text-xs uppercase tracking-wider font-medium">Free</span>
                      </div>
                      <div className="border-t border-[#E7E1D8] pt-4 flex justify-between font-serif text-lg text-[#171717]">
                        <span>Total</span>
                        <span className="font-bold">${total}</span>
                      </div>
                    </div>

                    <Link
                      href="/checkout"
                      className="block w-full bg-[#171717] text-[#F8F5EF] text-center py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C6A15B] hover:text-[#171717] transition-all"
                    >
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-20 text-center max-w-xl mx-auto space-y-6">
                <h2 className="text-3xl font-serif text-[#171717]">
                  Your bag is currently empty.
                </h2>
                <Link
                  href="/products"
                  className="inline-block bg-[#171717] text-[#F8F5EF] px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C6A15B] hover:text-[#171717] transition-all"
                >
                  Explore Collection
                </Link>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}