"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/mercados", label: "Mercados" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <div className="flex justify-center w-full sm:w-auto">
          <Logo size="md" />
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === item.href
                  ? "text-navy-900 bg-navy-50"
                  : "text-gray-600 hover:text-navy-900 hover:bg-gray-50"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
