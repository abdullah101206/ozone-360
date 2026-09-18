'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import products from '../../data/products';
import { useCart } from '@/app/context/CartContext';

export default function ProductDetailPage({ params }) {
  const resolvedParams = use(params);
  const productId = parseInt(resolvedParams.id, 10);

  const product = products.find((p) => p.id === productId);

  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState(() => {
    return product?.sizes && product.sizes.length > 0 ? product.sizes[0] : 'S';
  });
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#F8F5EF] text-[#171717] flex items-center justify-center px-4 pt-28 pb-20">
        <div className="max-w-md w-full text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C6A15B] font-medium">
            Ozone360 Collection
          </p>
          <h1 className="text-3xl font-serif font-light text-[#171717]">
            Product Not Found
          </h1>
          <p className="text-sm text-[#77716A] font-light leading-relaxed">
            The requested product does not exist or has been removed.
          </p>
          <div>
            <Link
              href="/products"
              className="inline-block border border-[#171717] bg-[#171717] text-[#F8F5EF] px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-transparent hover:text-[#171717] transition-all duration-300"
            >
              Return To Collection
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const handleDecrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
  };

  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#171717] px-4 sm:px-8 md:px-12 lg:px-16 pt-28 pb-24">
     
      <nav className="max-w-7xl mx-auto mb-8 sm:mb-12 text-xs font-light tracking-wider text-[#77716A]">
        <ol className="flex items-center space-x-2 truncate">
          <li><Link href="/" className="hover:text-[#171717]">Home</Link></li>
          <li className="text-[#E7E1D8]">\</li>
          <li><Link href="/products" className="hover:text-[#171717]">Products</Link></li>
          <li className="text-[#E7E1D8]">\</li>
          <li className="text-[#171717] font-normal truncate">{product.name}</li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

        <div className="lg:col-span-7 w-full">
          <div className="relative aspect-[3/4] w-full bg-[#E7E1D8]/40 border border-[#E7E1D8]/60 overflow-hidden group">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col space-y-8">
          <div className="space-y-3 border-b border-[#E7E1D8] pb-6">
            <p className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#C6A15B]">
              Ozone360 Modest Fashion
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal tracking-tight text-[#171717] uppercase">
              {product.name}
            </h1>
            <p className="text-lg sm:text-xl font-medium tracking-widest text-[#171717]">
              ${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#77716A] font-light leading-relaxed tracking-wide">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-4 text-xs tracking-wider border-y border-[#E7E1D8] py-4">
            <div>
              <span className="text-[#77716A] uppercase text-[10px] block font-medium">Fabric</span>
              <span className="text-[#171717] font-normal">{product.fabric || 'N/A'}</span>
            </div>
            <div>
              <span className="text-[#77716A] uppercase text-[10px] block font-medium">Color</span>
              <span className="text-[#171717] font-normal">{product.color || 'N/A'}</span>
            </div>
          </div>

          {product.sizes && product.sizes.length > 0 && (
            <div className="space-y-3">
              <span className="text-[#171717] uppercase font-medium text-[10px]">Select Size</span>
              <div className="flex flex-wrap gap-2.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[44px] h-11 px-3 text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                      selectedSize === size
                        ? 'bg-[#171717] text-[#F8F5EF] border border-[#171717]'
                        : 'bg-transparent text-[#171717] border border-[#E7E1D8] hover:border-[#171717]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-3">
            <span className="text-[#171717] uppercase font-medium text-[10px] tracking-wider block">Quantity</span>
            <div className="inline-flex items-center border border-[#E7E1D8] bg-transparent">
              <button
                type="button"
                onClick={handleDecrement}
                disabled={quantity <= 1}
                className="w-10 h-10 flex items-center justify-center text-[#171717] disabled:text-[#E7E1D8] hover:bg-[#E7E1D8]/30"
              >
                -
              </button>
              <span className="w-12 text-center text-xs font-medium tracking-wider text-[#171717]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={handleIncrement}
                className="w-10 h-10 flex items-center justify-center text-[#171717] hover:bg-[#E7E1D8]/30"
              >
                +
              </button>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full bg-[#171717] text-[#F8F5EF] border border-[#171717] py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-transparent hover:text-[#171717] transition-all duration-300"
            >
              Add To Cart
            </button>

            <div className="text-center">
              <Link
                href="/products"
                className="inline-block text-[11px] uppercase tracking-[0.2em] text-[#77716A] hover:text-[#171717]"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}