import { ShoppingCart, Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600 text-white">
              <Rocket size={18} />
            </span>
            Nivara Studio
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#products" className="hover:text-gray-900">Produk</a>
            <a href="#benefits" className="hover:text-gray-900">Keunggulan</a>
            <a href="#contact" className="hover:text-gray-900">Kontak</a>
          </nav>
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black"
          >
            <ShoppingCart size={18} /> Belanja
          </a>
        </div>
      </div>
    </header>
  );
}
