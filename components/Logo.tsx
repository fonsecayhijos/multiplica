import Image from "next/image";
import Link from "next/link";

export default function Logo({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  // sm = footer, md = header, lg = hero (triple del tamaño original)
  const heights = { sm: 56, md: 72, lg: 280 };
  const widths = { sm: 160, md: 200, lg: 520 };
  const h = heights[size];
  const w = widths[size];
  return (
    <Link
      href="/"
      className={`inline-flex items-center justify-center ${className}`}
    >
      <Image
        src="/logo.png"
        alt="Multiplica - Real Estate Investment Forum"
        width={w}
        height={h}
        priority
        className="w-auto object-contain"
        style={{ height: h, maxWidth: "100%" }}
      />
    </Link>
  );
}
