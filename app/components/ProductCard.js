'use client';

import React from 'react';
import Link from 'next/link';

export default function ProductCard({ product }) {
  if (!product) return null;

  const { id, name, price, image, fabric, color } = product;

  return (
    <Link 
      href={`/products/${id}`} 
      className="group block font-sans text-[#171717] selection:bg-[#C6A15B] selection:text-white focus:outline-none"
      aria-label={`View details for ${name}`}
    >
      <div className="flex flex-col space-y-4">
        
        <div className="relative aspect-[3/4] w-full bg-[#E7E1D8]/40 overflow-hidden border border-[#E7E1D8]/60">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-[#171717]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-end p-4 pointer-events-none">
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#F8F5EF] bg-[#171717]/80 backdrop-blur-sm px-3 py-1.5 border border-[#F8F5EF]/20 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
              View Product →
            </span>
          </div>
        </div>

        <div className="space-y-1 text-left">
          
          <h3 className="text-sm font-serif font-semibold tracking-wide text-[#171717] group-hover:text-[#C6A15B] transition-colors duration-300 uppercase truncate">
            {name}
          </h3>

          {(fabric || color) && (
            <p className="text-xs text-[#77716A] font-light tracking-wider capitalize">
              {[fabric, color].filter(Boolean).join(' · ')}
            </p>
          )}

          {/* Price */}
          <p className="text-xs font-medium tracking-widest text-[#171717] pt-1">
            ${typeof price === 'number' ? price.toFixed(2) : price}
          </p>

        </div>

      </div>
    </Link>
  );
}