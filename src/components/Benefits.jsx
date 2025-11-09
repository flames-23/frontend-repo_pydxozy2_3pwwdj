import { ShieldCheck, Zap, Wrench } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Keamanan & Lisensi Resmi",
    desc: "Produk terlisensi dengan standar keamanan tinggi dan pembaruan keandalan.",
  },
  {
    icon: Zap,
    title: "Cepat & Efisien",
    desc: "Hemat waktu produksi konten dengan otomatisasi dan workflow yang rapi.",
  },
  {
    icon: Wrench,
    title: "Dukungan & Update",
    desc: "Tim siap membantu, update fitur rutin, dan roadmap yang jelas.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Kenapa Nivara Studio</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">Kami membangun alat kreator yang fokus pada hasil: kualitas visual, efisiensi proses, dan pertumbuhan channel yang berkelanjutan.</p>

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
