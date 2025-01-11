// src/components/sections/testimonials.tsx
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Excelente assessoria jurídica! A equipe da HLG foi fundamental no processo de registro da minha marca.",
    author: "Maria Silva",
    role: "Empreendedora",
    rating: 5,
  },
  {
    quote:
      "Profissionalismo e agilidade no registro de patente. Superou todas as expectativas.",
    author: "João Santos",
    role: "Inventor",
    rating: 5,
  },
  {
    quote:
      "O suporte na proteção dos direitos autorais da minha obra foi impecável.",
    author: "Ana Costa",
    role: "Escritora",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-primary" id="depoimentos">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-neutral-100/90 text-lg">
            A satisfação de nossos clientes é o melhor reflexo da qualidade dos
            nossos serviços.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-none">
              <CardContent className="pt-6">
                <QuoteIcon className="w-8 h-8 text-primary/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-primary fill-primary"
                          : "text-neutral-200"
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="text-lg text-neutral-700 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <footer>
                  <cite className="not-italic">
                    <div className="font-semibold text-primary">
                      {testimonial.author}
                    </div>
                    <div className="text-neutral-500 text-sm">
                      {testimonial.role}
                    </div>
                  </cite>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
