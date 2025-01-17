// src/components/layout/footer.tsx
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/icon.png"
                      alt="ícone"
                      layout="intrinsic"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                </Link>
              </div>
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
              <li className="text-neutral-100/80">
                Avenida República Argentina, nº 1336 - Água Verde
              </li>
              <li className="text-neutral-100/80">Curitiba - PR</li>
              <li className="text-neutral-100/80">
                (41) 99920-3227 | (41) 98473-8967
              </li>
              <li className="text-neutral-100/80">
                consultoriaempresarialhlg@gmail.com
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1AoiEfYbGG/?mibextid=wwXIfr"
                className="hover:text-neutral-100/80"
                target="blank"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/assessoriajushlg?igsh=MWJqdnNmZDkwbjU5OQ%3D%3D&utm_source=qr "
                className="hover:text-neutral-100/80"
                target="blank"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/assessoriajushlg/"
                className="hover:text-neutral-100/80"
                target="blank"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              <a
                href="https://www.tiktok.com/@assessoriajushlg?_t=ZM-8t7wZcAPXuP&_r=1"
                className="hover:text-neutral-100/80 ml-4"
                target="blank"
              >
                <img
                  src="/tiktok-icon.png"
                  alt="Ícone do TikTok"
                  className="w-7 h-7"
                />
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
            {/* <p>CNPJ: XX.XXX.XXX/0001-XX</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
