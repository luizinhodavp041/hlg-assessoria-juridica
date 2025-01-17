import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-primary text-white h-screen">
      <div className="container h-full flex flex-col justify-center">
        <div className="max-w-2xl space-y-8">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            A Base Jurídica Que Impulsiona Sua Empresa
          </h1>

          <p className="text-lg sm:text-xl text-neutral-100">
            Soluções jurídicas personalizadas para proteger seus interesses e
            impulsionar seu sucesso empresarial.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              asChild
              className="bg-white text-primary hover:bg-neutral-100"
            >
              <Link href="#contato">Fale Conosco</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white bg-primary text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="#servicos">Nossos Serviços</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
