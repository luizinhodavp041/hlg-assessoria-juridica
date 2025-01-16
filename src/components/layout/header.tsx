"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Header() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Altura do hero - altura do header (64px)
      const heroHeight = window.innerHeight - 64;
      setIsAtTop(window.scrollY <= heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isAtTop ? "bg-transparent" : "translate-y-[-100%]"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="h-20 w-20 relative overflow-hidden">
            <Image
              src="/icon.jpg"
              alt="ícone"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <span className="text-xl font-bold text-white">
            HLG Assessoria Jurídica
          </span>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#servicos" className="text-white/90 hover:text-white">
            Serviços
          </Link>
          <Link href="#sobre" className="text-white/90 hover:text-white">
            Sobre
          </Link>
          <Link href="#depoimentos" className="text-white/90 hover:text-white">
            Depoimentos
          </Link>
          <Button
            asChild
            variant="outline"
            className="border-white text-primary hover:bg-primary hover:text-white"
          >
            <Link href="#contato">Entre em Contato</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden">
          <span className="sr-only">Abrir menu</span>
        </button>
      </div>
    </header>
  );
}
