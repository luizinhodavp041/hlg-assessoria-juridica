// src/components/sections/contact.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 bg-neutral-50" id="contato">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Entre em Contato
              </h2>
              <p className="text-neutral-600 text-lg">
                Estamos prontos para auxiliar você com as melhores soluções
                jurídicas. Entre em contato conosco.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-neutral-900">Telefone</p>
                  <p className="text-neutral-600">(11) 9999-9999</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-neutral-900">E-mail</p>
                  <p className="text-neutral-600">
                    contato@hlgassessoria.com.br
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-neutral-900">Endereço</p>
                  <p className="text-neutral-600">
                    Rua Exemplo, 123 - São Paulo, SP
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-900">
                    Nome
                  </label>
                  <Input placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-900">
                    E-mail
                  </label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-900">
                  Telefone
                </label>
                <Input placeholder="(00) 00000-0000" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-900">
                  Mensagem
                </label>
                <Textarea
                  placeholder="Como podemos ajudar?"
                  className="min-h-[120px]"
                />
              </div>

              <Button className="w-full">Enviar Mensagem</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
