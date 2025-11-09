import { Mail, MessageSquare, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Hubungi Nivara Studio</h2>
            <p className="mt-2 text-gray-600">Konsultasikan kebutuhan tool untuk channel YouTube Anda. Kami siap bantu dari ide hingga implementasi.</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2"><Phone size={18} className="text-indigo-600"/> +62-812-3456-7890</li>
              <li className="flex items-center gap-2"><Mail size={18} className="text-indigo-600"/> hello@nivarastudio.com</li>
              <li className="flex items-center gap-2"><MessageSquare size={18} className="text-indigo-600"/> Chat via WhatsApp</li>
            </ul>
          </div>
          <form className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nama</label>
                <input className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Nama Anda" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="you@email.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Pesan</label>
                <textarea rows={4} className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Ceritakan kebutuhan Anda..." />
              </div>
            </div>
            <button type="button" className="mt-4 inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700">
              Kirim Pesan
            </button>
            <p className="mt-2 text-xs text-gray-500">Kami akan membalas dalam 1x24 jam.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
