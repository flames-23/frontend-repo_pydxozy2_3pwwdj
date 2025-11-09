import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Benefits from './components/Benefits';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Benefits />
        <Contact />
      </main>
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Nivara Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#products" className="hover:text-gray-900">Produk</a>
            <a href="#benefits" className="hover:text-gray-900">Keunggulan</a>
            <a href="#contact" className="hover:text-gray-900">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
