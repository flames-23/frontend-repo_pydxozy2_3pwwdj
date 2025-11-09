import { ShoppingBag, Download, Monitor, Globe, Shield } from "lucide-react";

const products = [
  {
    id: 1,
    title: "License Manager Pro",
    type: "Desktop App",
    description: "Aktivasi lisensi offline/online, integrasi payment gateway, dan dashboard analitik.",
    price: 1490000,
    icon: Monitor,
  },
  {
    id: 2,
    title: "SaaS Starter Kit",
    type: "Web App",
    description: "Template SaaS siap pakai: autentikasi, billing, multi-tenant, dan UI modern.",
    price: 1990000,
    icon: Globe,
  },
  {
    id: 3,
    title: "Updater SDK",
    type: "Software Library",
    description: "SDK auto-update untuk aplikasi desktop dengan delta patch dan rollback.",
    price: 990000,
    icon: Download,
  },
];

function formatIDR(num) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(num);
}

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Produk Unggulan</h2>
            <p className="mt-2 text-gray-600">Pilih solusi yang sesuai. Semua produk dilengkapi dokumentasi dan dukungan.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50">
            <Shield size={18} /> Butuh Saran?
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.id} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-indigo-600 text-white">
                      <Icon size={18} />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                      <p className="text-xs text-gray-500">{p.type}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">Baru</span>
                </div>
                <p className="mt-4 text-sm text-gray-600">{p.description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="text-lg font-bold text-gray-900">{formatIDR(p.price)}</div>
                  <button className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black">
                    <ShoppingBag size={18} /> Beli Sekarang
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
