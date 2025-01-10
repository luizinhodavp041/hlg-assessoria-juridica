import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/75 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          {/* Se tiver um logo em SVG ou imagem */}
          {/* <Image src="/logo.svg" alt="HLG Logo" width={40} height={40} /> */}
          <span className="text-xl font-bold text-primary">
            HLG Assessoria Jurídica
          </span>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#servicos"
            className="text-neutral-600 hover:text-primary"
          >
            Serviços
          </Link>
          <Link href="#sobre" className="text-neutral-600 hover:text-primary">
            Sobre
          </Link>
          <Link
            href="#depoimentos"
            className="text-neutral-600 hover:text-primary"
          >
            Depoimentos
          </Link>
          <Button asChild>
            <Link href="#contato">Entre em Contato</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden">
          {/* Podemos adicionar um ícone de menu aqui */}
          <span className="sr-only">Abrir menu</span>
        </button>
      </div>
    </header>
  );
}
