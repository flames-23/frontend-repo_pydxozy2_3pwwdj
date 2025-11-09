import { Rocket, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Professional background image cover */}
      <div
        className="absolute inset-0 h-[560px] w-full"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=2000&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Subtle overlay for readability */}
      <div className="pointer-events-none absolute inset-0 h-[560px] bg-gradient-to-b from-black/40 via-black/30 to-white" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-white lg:pb-20">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs font-medium backdrop-blur">
              <Sparkles size={14} className="text-amber-300" />
              Nivara Studio • Tools untuk Content Creator YouTube
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
              Software & Web App untuk Produksi Konten YouTube yang Lebih Cepat
            </h1>
            <p className="mt-4 text-white/90 text-lg max-w-2xl">
              Optimasi SEO video, otomatisasi workflow, manajemen thumbnail, dan analitik performa—semua dalam ekosistem alat yang
              dirancang khusus bagi kreator. Hemat waktu, tingkatkan kualitas, dan kembangkan channel Anda.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#products" className="inline-flex justify-center items-center rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow hover:bg-indigo-700">
                <Rocket size={18} className="mr-2" /> Jelajahi Produk
              </a>
              <a href="#contact" className="inline-flex justify-center items-center rounded-md border border-white/30 px-5 py-3 text-white font-medium hover:bg-white/10">
                Konsultasi Gratis
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/90">
              <li className="flex items-center gap-2"><ShieldCheck className="text-green-300" size={18}/> Riset kata kunci & optimasi metadata</li>
              <li className="flex items-center gap-2"><ShieldCheck className="text-green-300" size={18}/> Otomatisasi upload & penjadwalan</li>
              <li className="flex items-center gap-2"><ShieldCheck className="text-green-300" size={18}/> A/B testing thumbnail dan CTR</li>
              <li className="flex items-center gap-2"><ShieldCheck className="text-green-300" size={18}/> Analitik performa & tren</li>
            </ul>
          </div>

          {/* Visual product teaser aligned with reference UI */}
          <div className="relative lg:-mt-10">
            <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-[2px] shadow-2xl">
              <div className="h-full w-full rounded-[11px] bg-white p-6 grid grid-cols-3 gap-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="rounded-md border border-gray-200 bg-gray-50 p-4">
                    <div className="h-4 w-2/3 rounded bg-gray-200" />
                    <div className="mt-2 h-3 w-1/2 rounded bg-gray-200" />
                    <div className="mt-4 h-6 w-28 rounded bg-indigo-100" />
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

      {/* white background continues for next sections */}
      <div className="h-24" />
    </section>
  );
}
