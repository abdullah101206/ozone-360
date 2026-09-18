import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import products from "./data/products";
import Link from "next/link";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#171717] selection:bg-[#C6A15B] selection:text-white">
      
      <Hero />

      <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-20 sm:py-28">
        <div className="text-center space-y-3 mb-12 sm:mb-16">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium text-[#C6A15B]">
            Curated Selection
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light tracking-tight text-[#171717]">
            Featured Designs
          </h2>
          <p className="max-w-md mx-auto text-xs sm:text-sm text-[#77716A] font-light leading-relaxed tracking-wide">
            Explore our most coveted abayas and gowns, crafted with exceptional textiles and timeless modesty.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-10 sm:gap-y-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Link
            href="/products"
            className="inline-block border border-[#171717] bg-[#171717] text-[#F8F5EF] px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-transparent hover:text-[#171717] transition-all duration-300"
          >
            View Full Collection
          </Link>
        </div>
      </section>

      <section className="border-t border-[#E7E1D8] bg-[#E7E1D8]/20 py-16 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <h3 className="font-serif text-sm tracking-wider uppercase font-medium">Bespoke Tailoring</h3>
            <p className="text-xs text-[#77716A] font-light leading-relaxed">Precision cutting and flowing silhouettes designed for international elegance.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-serif text-sm tracking-wider uppercase font-medium">Premium Fabrics</h3>
            <p className="text-xs text-[#77716A] font-light leading-relaxed">Sourced high-grade silks, satins, and velvets built for lasting comfort.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-serif text-sm tracking-wider uppercase font-medium">Worldwide Shipping</h3>
            <p className="text-xs text-[#77716A] font-light leading-relaxed">Express door-step delivery tailored for global clientele in UK, USA, & beyond.</p>
          </div>
        </div>
      </section>

    </main>
  );
}