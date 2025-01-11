// src/components/sections/about.tsx
import { Card } from "@/components/ui/card";
import { Users, Award, Clock, Trophy } from "lucide-react";
import Image from "next/image";

const metrics = [
  {
    icon: Users,
    value: "500+",
    label: "Clientes Atendidos",
  },
  {
    icon: Award,
    value: "98%",
    label: "Taxa de Sucesso",
  },
  {
    icon: Clock,
    value: "10+",
    label: "Anos de Experiência",
  },
  {
    icon: Trophy,
    value: "350+",
    label: "Marcas Registradas",
  },
];

export function About() {
  return (
    <section className="py-24 bg-white" id="sobre">
      <div className="container">
        {/* Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Imagem */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-2xl h-[600px] rounded-3xl bg-neutral-200 overflow-hidden shadow-xl relative">
              <Image
                src="/api/placeholder/800/1200"
                alt="Placeholder"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4">
                Quem Somos
              </h2>
              <div className="w-20 h-1.5 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-6 text-neutral-600 text-lg">
              <p>
                Com mais de uma década de experiência no mercado jurídico, a HLG
                Assessoria Jurídica se consolidou como referência na proteção
                dos direitos de propriedade intelectual, oferecendo soluções
                jurídicas inovadoras e personalizadas.
              </p>
              <p>
                Nossa equipe altamente qualificada combina expertise técnica com
                um profundo entendimento das necessidades específicas de cada
                cliente, garantindo resultados excepcionais e duradouros.
              </p>
              <p>
                Nosso compromisso com a excelência e a ética profissional nos
                permitiu construir relações de confiança duradouras com nossos
                clientes, contribuindo diretamente para o sucesso de seus
                projetos e empreendimentos.
              </p>
            </div>
          </div>
        </div>

        {/* Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="p-8 text-center border-none bg-neutral-50 hover:bg-neutral-100 transition-colors"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <metric.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <div className="text-neutral-600">{metric.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
