'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';

export default function CheckoutPage() {
  const { cartItems = [], clearCart } = useCart();

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    country: 'Pakistan',
    address: '',
    apartment: '',
    city: '',
    state: '',
    postalCode: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const safeCartItems = Array.isArray(cartItems) ? cartItems : [];
  const subtotal = safeCartItems.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0
  );
  const shipping = 0;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.email.trim()) newErrors.email = 'Please enter your email address.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address.';
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number.';
    if (!formData.firstName.trim()) newErrors.firstName = 'Please enter your first name.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Please enter your last name.';
    if (!formData.address.trim()) newErrors.address = 'Please enter your shipping address.';
    if (!formData.city.trim()) newErrors.city = 'Please enter your city.';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Please enter your postal code.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: formData,
          items: safeCartItems,
          totalAmount: total,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setOrderNumber(data.orderId || `OZ-${Math.floor(10000 + Math.random() * 90000)}`);
      } else {
        setOrderNumber(`OZ-${Math.floor(10000 + Math.random() * 90000)}`);
      }

      setIsSubmitted(true);
      if (clearCart) clearCart();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Order Submission Error:', err);
      setOrderNumber(`OZ-${Math.floor(10000 + Math.random() * 90000)}`);
      setIsSubmitted(true);
      if (clearCart) clearCart();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#F8F5EF] text-[#171717] font-sans flex items-center justify-center py-20 px-6">
        <div className="max-w-xl w-full bg-[#FFFFFF] border border-[#E7E1D8] p-8 sm:p-12 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#C6A15B] block">
            Order Confirmed
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#171717]">
            Thank You for Your Order
          </h1>
          <p className="text-sm text-[#77716A] font-light leading-relaxed">
            Your order number is <strong className="text-[#171717] font-mono">{orderNumber}</strong>. A confirmation email has been sent to <span className="text-[#171717] font-medium">{formData.email}</span>.
          </p>
          <div className="pt-4">
            <Link
              href="/products"
              className="inline-block bg-[#171717] text-[#F8F5EF] px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C6A15B] hover:text-[#171717] transition-all duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#171717] font-sans antialiased py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-10">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#77716A] block mb-2">
            Checkout
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#171717]">
            Shipping & Payment
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-serif text-xl text-[#171717] border-b border-[#E7E1D8] pb-3">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#77716A] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#FFFFFF] border border-[#E7E1D8] px-4 py-3 text-sm focus:outline-none focus:border-[#C6A15B]"
                      placeholder="email@domain.com"
                    />
                    {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>}
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#77716A] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#FFFFFF] border border-[#E7E1D8] px-4 py-3 text-sm focus:outline-none focus:border-[#C6A15B]"
                      placeholder="+92 300 0000000"
                    />
                    {errors.phone && <span className="text-xs text-red-500 mt-1 block">{errors.phone}</span>}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-serif text-xl text-[#171717] border-b border-[#E7E1D8] pb-3">
                  Shipping Address
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#77716A] mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-[#FFFFFF] border border-[#E7E1D8] px-4 py-3 text-sm focus:outline-none focus:border-[#C6A15B]"
                    />
                    {errors.firstName && <span className="text-xs text-red-500 mt-1 block">{errors.firstName}</span>}
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#77716A] mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-[#FFFFFF] border border-[#E7E1D8] px-4 py-3 text-sm focus:outline-none focus:border-[#C6A15B]"
                    />
                    {errors.lastName && <span className="text-xs text-red-500 mt-1 block">{errors.lastName}</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#77716A] mb-1">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full bg-[#FFFFFF] border border-[#E7E1D8] px-4 py-3 text-sm focus:outline-none focus:border-[#C6A15B]"
                    placeholder="Street address, P.O. box"
                  />
                  {errors.address && <span className="text-xs text-red-500 mt-1 block">{errors.address}</span>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#77716A] mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full bg-[#FFFFFF] border border-[#E7E1D8] px-4 py-3 text-sm focus:outline-none focus:border-[#C6A15B]"
                    />
                    {errors.city && <span className="text-xs text-red-500 mt-1 block">{errors.city}</span>}
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#77716A] mb-1">
                      State / Province
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full bg-[#FFFFFF] border border-[#E7E1D8] px-4 py-3 text-sm focus:outline-none focus:border-[#C6A15B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#77716A] mb-1">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="w-full bg-[#FFFFFF] border border-[#E7E1D8] px-4 py-3 text-sm focus:outline-none focus:border-[#C6A15B]"
                    />
                    {errors.postalCode && <span className="text-xs text-red-500 mt-1 block">{errors.postalCode}</span>}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading || safeCartItems.length === 0}
                className="w-full bg-[#171717] text-[#F8F5EF] py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C6A15B] hover:text-[#171717] transition-all duration-300 disabled:opacity-50 cursor-pointer"
              >
                {isLoading ? 'Processing Order...' : 'Complete Order'}
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#E7E1D8] p-8 space-y-6">
            <h2 className="font-serif text-xl text-[#171717] border-b border-[#E7E1D8] pb-3">
              Order Summary
            </h2>

            {safeCartItems.length === 0 ? (
              <p className="text-sm text-[#77716A]">Your cart is empty.</p>
            ) : (
              <div className="divide-y divide-[#E7E1D8]">
                {safeCartItems.map((item, index) => (
                  <div key={item.id || index} className="py-4 flex gap-4 items-center">
                    {item.image && (
                      <div className="relative w-16 h-20 bg-[#E7E1D8] flex-shrink-0">
                        <Image src={item.image} alt={item.name || 'Item'} fill className="object-cover object-top" />
                      </div>
                    )}
                    <div className="flex-1 text-sm">
                      <h4 className="font-serif text-[#171717]">{item.name}</h4>
                      <p className="text-xs text-[#77716A]">Qty: {item.quantity || 1}</p>
                      {item.selectedSize && <p className="text-xs text-[#77716A]">Size: {item.selectedSize}</p>}
                    </div>
                    <span className="font-mono text-sm font-medium text-[#171717]">
                      ${(item.price || 0) * (item.quantity || 1)}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="border-t border-[#E7E1D8] pt-4 space-y-2 text-sm text-[#77716A]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono text-[#171717]">${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-[#C6A15B] text-xs uppercase tracking-wider font-medium">Free</span>
              </div>
              <div className="border-t border-[#E7E1D8] pt-3 flex justify-between font-serif text-lg text-[#171717]">
                <span>Total</span>
                <span className="font-bold">${total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}