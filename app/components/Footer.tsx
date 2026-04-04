import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <span className="text-xl font-bold">Premium Send</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              O&apos;zbekistonda Telegram Premium obunasini so&apos;mda sotib olishning eng qulay va ishonchli usuli.
            </p>
          </div>

          {/* Sahifalar */}
          <div>
            <h3 className="font-semibold mb-4 text-white/90">Sahifalar</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-white/60 hover:text-primary text-sm transition-colors">
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link href="/3-oylik" className="text-white/60 hover:text-primary text-sm transition-colors">
                  3 oylik Premium
                </Link>
              </li>
              <li>
                <Link href="/6-oylik" className="text-white/60 hover:text-primary text-sm transition-colors">
                  6 oylik Premium
                </Link>
              </li>
              <li>
                <Link href="/12-oylik" className="text-white/60 hover:text-primary text-sm transition-colors">
                  12 oylik Premium
                </Link>
              </li>
            </ul>
          </div>

          {/* Telegram Premium */}
          <div>
            <h3 className="font-semibold mb-4 text-white/90">Telegram Premium</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/maqolalar" className="text-white/60 hover:text-primary text-sm transition-colors">
                  Maqolalar
                </Link>
              </li>
              <li>
                <Link href="/3-oylik" className="text-white/60 hover:text-primary text-sm transition-colors">
                  Narxlar
                </Link>
              </li>
              <li>
                <Link href="/oferta" className="text-white/60 hover:text-primary text-sm transition-colors">
                  Ommaviy oferta
                </Link>
              </li>
            </ul>
          </div>

          {/* Aloqa */}
          <div>
            <h3 className="font-semibold mb-4 text-white/90">Bog&apos;lanish</h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-primary text-sm transition-colors flex items-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  @premiumsendbot
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Premium Send. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
}
