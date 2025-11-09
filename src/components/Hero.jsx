import { Rocket, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
        <div className="pointer-events-none absolute -left-32 -top-32 size-64 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 -bottom-32 size-64 rounded-full bg-purple-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 ring-1 ring-gray-200 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
              <Sparkles size={14} className="text-indigo-600" />
              Solusi Digital Profesional
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Jual Software, Web App, dan Desktop App yang Siap Skala
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Bangun, kelola, dan kembangkan bisnis Anda dengan produk digital berkualitas. Lisensi resmi, update rutin, dan dukungan prioritas.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#products" className="inline-flex justify-center items-center rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow hover:bg-indigo-700">
                <Rocket size={18} className="mr-2" /> Jelajahi Produk
              </a>
              <a href="#contact" className="inline-flex justify-center items-center rounded-md border border-gray-300 px-5 py-3 text-gray-800 font-medium hover:bg-gray-50">
                Konsultasi Gratis
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700">
              <li className="flex items-center gap-2"><ShieldCheck className="text-green-600" size={18}/> Garansi & lisensi resmi</li>
              <li className="flex items-center gap-2"><ShieldCheck className="text-green-600" size={18}/> Dukungan prioritas</li>
              <li className="flex items-center gap-2"><ShieldCheck className="text-green-600" size={18}/> Pembayaran aman</li>
              <li className="flex items-center gap-2"><ShieldCheck className="text-green-600" size={18}/> Update berkala</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-[2px] shadow-lg">
              <div className="h-full w-full rounded-[11px] bg-white p-6 grid grid-cols-3 gap-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="rounded-md border border-gray-200 bg-gray-50 p-4">
                    <div className="h-4 w-2/3 rounded bg-gray-200" />
                    <div className="mt-2 h-3 w-1/2 rounded bg-gray-200" />
                    <div className="mt-4 h-6 w-20 rounded bg-indigo-100" />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-lg bg-white shadow px-4 py-3 ring-1 ring-gray-200">
              <p className="text-sm font-medium text-gray-800">Pengiriman instan</p>
              <p className="text-xs text-gray-500">Kode lisensi otomatis setelah checkout</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
