'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import productsData from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ProductsPage() {
  const [sortBy, setSortBy] = useState('featured');

  const sortedProducts = useMemo(() => {
    if (!productsData || productsData.length === 0) return [];
    
    const productsCopy = [...productsData];

    switch (sortBy) {
      case 'price-low':
        return productsCopy.sort((a, b) => a.price - b.price);
      case 'price-high':
        return productsCopy.sort((a, b) => b.price - a.price);
      case 'name-az':
        return productsCopy.sort((a, b) => a.name.localeCompare(b.name));
      case 'featured':
      default:
        return productsCopy;
    }
  }, [sortBy]);

  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#171717] selection:bg-[#C6A15B] selection:text-white px-4 sm:px-8 md:px-12 lg:px-16 pt-28 pb-20">
      
      <section className="max-w-7xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium text-[#C6A15B]">
          Ozone360 Collection
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight text-[#171717]">
          Shop Collection
        </h1>
        <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#77716A] font-light leading-relaxed tracking-wide pt-1">
          Discover refined abayas and gowns designed for modern women who appreciate timeless elegance and effortless style.
        </p>
      </section>

      <section className="max-w-7xl mx-auto flex flex-row justify-between items-center border-b border-[#E7E1D8] pb-4 mb-8 sm:mb-12 text-xs text-[#77716A] tracking-wider font-light">
        <div>
          <span>{sortedProducts.length} Pieces</span>
        </div>

        <div className="flex items-center space-x-2">
          <label htmlFor="sort-select" className="hidden sm:inline">
            Sort by:
          </label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent text-[#171717] focus:outline-none cursor-pointer py-1 font-normal tracking-wide"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name-az">Name: A-Z</option>
          </select>
        </div>
      </section>

      <section className="max-w-7xl mx-auto">
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-10 sm:gap-y-12">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 space-y-6">
            <h2 className="text-xl font-serif font-light text-[#171717]">
              No products available
            </h2>
            <div>
              <Link
                href="/"
                className="inline-block border border-[#171717] text-[#171717] px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#171717] hover:text-[#F8F5EF] transition-all duration-300"
              >
                Return Home
              </Link>
            </div>
          </div>
        )}
      </section>

    </main>
  );
}