// src/components/sections/about.tsx
import { Card } from "@/components/ui/card";
import { Users, Award, Trophy, BriefcaseBusiness } from "lucide-react";
import Image from "next/image";

const metrics = [
  {
    icon: BriefcaseBusiness,
    value: "3+",
    label: "Anos de Experiência",
  },
  {
    icon: Trophy,
    value: "350+",
    label: "Marcas Registradas",
  },
  {
    icon: Users,
    value: "160+",
    label: "Clientes Atendidos",
  },
  {
    icon: Award,
    value: "98%",
    label: "Taxa de Sucesso",
  },
];

export function About() {
  return (
    <section className="py-24 bg-white" id="sobre">
      <div className="container">
        {/* Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Conteúdo */}
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4">
                Quem Somos
              </h2>
              <div className="w-20 h-1.5 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-6 text-neutral-600 text-lg">
              <p>
                A HLG Assessoria está no mercado há mais de 3 anos e se
                consolidou como referência na proteção de direitos relacionados
                à propriedade industrial, intelectual, direitos autorais e na
                assessoria jurídica para empresas. Nosso objetivo é oferecer
                soluções inovadoras e personalizadas, atendendo às necessidades
                específicas de cada cliente com eficiência e excelência.
              </p>
              <p>
                Nossa equipe altamente qualificada combina expertise técnica com
                um profundo entendimento das demandas de nossos clientes. Essa
                abordagem nos permite alcançar resultados excepcionais e
                duradouros, sempre alinhados aos objetivos estratégicos de quem
                confia em nossos serviços.
              </p>
              <p>
                O compromisso da HLG Assessoria com a ética profissional e a
                busca contínua pela excelência nos permitiram construir relações
                de confiança sólidas e duradouras. Acreditamos que essas
                parcerias são fundamentais para o sucesso dos projetos de nossos
                clientes, contribuindo diretamente para o crescimento
                sustentável de suas empresas.
              </p>
              <p>
                Conte conosco para proteger e impulsionar o futuro do seu
                negócio.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4">
                Nossa Equipe
              </h2>
              <div className="w-20 h-1.5 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Sessões dos Sócios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Sócio 1 */}
          <div className="space-y-6 text-neutral-600">
            <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/images/socio1.png"
                alt="Soluções digitais integradas"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-0">
                Luiz Pereira
              </h3>
              <p className="italic">Coordenador Jurídico</p>
            </div>
          </div>

          {/* Sócio 2 */}
          <div className="space-y-6 text-neutral-600">
            <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/images/socio2.png"
                alt="Soluções digitais integradas"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-0">
                Henrique Theodoro
              </h3>
              <p className="italic">Executivo de Vendas</p>
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
