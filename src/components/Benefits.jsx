import { ShieldCheck, Zap, Wrench } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Keamanan & Lisensi Resmi",
    desc: "Semua produk dilindungi lisensi dan dirancang dengan standar keamanan tinggi.",
  },
  {
    icon: Zap,
    title: "Instalasi & Pengiriman Instan",
    desc: "Akses file unduhan dan kunci lisensi segera setelah pembayaran sukses.",
  },
  {
    icon: Wrench,
    title: "Dukungan & Update Berkala",
    desc: "Tim support siap membantu, serta pembaruan fitur dan patch rutin.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Kenapa Memilih Kami</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">Kami fokus pada kualitas, keamanan, dan pengalaman pengguna agar bisnis Anda melaju cepat.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div key={idx} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-indigo-600 text-white">
                  <Icon size={18} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{b.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
