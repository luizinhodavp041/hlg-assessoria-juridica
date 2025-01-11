// src/components/layout/footer.tsx
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-lg bg-white"></div>
              <span className="text-xl font-bold">HLG Assessoria</span>
            </div>
            <p className="text-neutral-100/80">
              Soluções jurídicas especializadas para proteger seus direitos e
              propriedade intelectual.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#servicos"
                  className="text-neutral-100/80 hover:text-white"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="#sobre"
                  className="text-neutral-100/80 hover:text-white"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="#depoimentos"
                  className="text-neutral-100/80 hover:text-white"
                >
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="text-neutral-100/80 hover:text-white"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contato</h3>
            <ul className="space-y-3">
              <li className="text-neutral-100/80">Rua Exemplo, 123</li>
              <li className="text-neutral-100/80">São Paulo - SP</li>
              <li className="text-neutral-100/80">(11) 9999-9999</li>
              <li className="text-neutral-100/80">
                contato@hlgassessoria.com.br
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-neutral-100/80">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-neutral-100/80">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-neutral-100/80">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-100/60">
            <p>© 2024 HLG Assessoria Jurídica. Todos os direitos reservados.</p>
            <p>CNPJ: XX.XXX.XXX/0001-XX</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
