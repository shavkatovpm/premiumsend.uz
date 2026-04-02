import Link from "next/link";

interface PricingCardProps {
  months: number;
  price: string;
  pricePerMonth: string;
  popular?: boolean;
  features: string[];
  href: string;
}

export default function PricingCard({
  months,
  price,
  pricePerMonth,
  popular = false,
  features,
  href,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 card-hover ${
        popular
          ? "bg-white border-2 border-primary shadow-xl shadow-primary/10 scale-105"
          : "bg-white border border-card-border shadow-lg"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="shine-badge text-white text-xs font-bold px-4 py-1.5 rounded-full">
            Eng ommabop
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
            popular ? "hero-gradient" : "bg-primary-light"
          }`}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill={popular ? "white" : "#0088cc"}
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-foreground">{months} oylik</h3>
        <p className="text-muted text-sm mt-1">Telegram Premium</p>
      </div>

      <div className="text-center mb-6">
        <div className="flex items-end justify-center gap-1">
          <span className="text-4xl font-extrabold text-foreground">{price}</span>
          <span className="text-lg text-muted mb-1">so&apos;m</span>
        </div>
        <p className="text-sm text-primary font-medium mt-1">
          oyiga ~ {pricePerMonth} so&apos;m
        </p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm text-foreground/80">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={`block w-full py-3.5 rounded-xl text-center font-semibold text-sm transition-all ${
          popular
            ? "hero-gradient text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
            : "bg-primary-light text-primary hover:bg-primary hover:text-white"
        }`}
      >
        Sotib olish
      </Link>
    </div>
  );
}
