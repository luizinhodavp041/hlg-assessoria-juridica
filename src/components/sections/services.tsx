import {
  ScrollText,
  Award,
  Lightbulb,
  Copyright,
  Music,
  Palette,
  BookOpen,
  Shield,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const services = [
  {
    icon: ScrollText,
    title: "Consultoria Jurídica",
    description:
      "Auxiliamos empresas e pessoas físicas na elaboração e análise de contratos, questões tributárias, sucessão patrimonial e demais demandas jurídicas relevantes.",
  },
  {
    icon: Award,
    title: "Registro de Marca",
    description:
      "Orientamos e executamos todo o processo de registro de marca no Instituto Nacional da Propriedade Industrial (INPI), garantindo a proteção legal da identidade visual.",
  },
  {
    icon: Lightbulb,
    title: "Registro de Patente",
    description:
      "Realizamos o registro de invenções e modelos de utilidade no INPI, garantindo exclusividade e direitos legais sobre criações inovadoras.",
  },
  {
    icon: Copyright,
    title: "Registro de Direitos Autorais",
    description:
      "Atuamos na proteção de obras intelectuais como músicas, livros, pinturas, fotografias e qualquer criação artística ou digital.",
  },
  {
    icon: Music,
    title: "Registro Musical",
    description:
      "Cuidamos do registro e proteção de composições musicais, letras, partituras e gravações, promovendo a segurança jurídica necessária para autores e músicos.",
  },
  {
    icon: Palette,
    title: "Registro de Desenho Industrial",
    description:
      "Protegemos aspectos visuais de produtos como design, forma e aparência, garantindo exclusividade para o autor e agregando valor competitivo.",
  },
  {
    icon: BookOpen,
    title: "Obras Literárias e Digitais",
    description:
      "Registramos livros, e-books, artigos, softwares, aplicativos e outros conteúdos digitais ou literários, protegendo a autoria e direitos comerciais.",
  },
  {
    icon: Shield,
    title: "Proteção de Bens Criativos",
    description:
      "Prestamos suporte jurídico para registrar e proteger qualquer tipo de bem ou criação realizada por pessoas, incluindo invenções, designs e obras originais.",
  },
];

export function Services() {
  return (
    <section className="py-24 bg-neutral-50" id="servicos">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-neutral-600 text-lg">
            Oferecemos soluções jurídicas especializadas para proteger sua
            propriedade intelectual e garantir seus direitos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-neutral-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
