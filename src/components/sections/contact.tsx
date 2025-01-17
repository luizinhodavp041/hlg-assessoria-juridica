"use client";

// src/components/sections/contact.tsx
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 bg-neutral-50" id="contato">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Entre em Contato Conosco
              </h2>
              <p className="text-neutral-600 text-lg">
                Estamos prontos para auxiliar você com as melhores soluções
                jurídicas.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-neutral-900">WhatsApp</p>
                  <p className="text-neutral-600">(41) 99920-3227</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-neutral-900">Ligações</p>
                  <p className="text-neutral-600">(41) 98473-8967</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-neutral-900">E-mail</p>
                  <p className="text-neutral-600">
                    consultoriaempresarialhlg@gmail.com
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
                    Avenida República Argentina - nº 1336 Água Verde - Curitiba
                    PR (Inspira Business)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Caixa com botão para WhatsApp */}
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-16">
              {/* Caixa com ícone, título, subtítulo e botão para WhatsApp */}
              <div className="bg-primary p-8 rounded-lg shadow-xl max-w-md mx-auto mt-16 text-center">
                <div className="mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Gostaria de marcar uma reunião ou consulta?
                  </h2>
                  <p className="text-sm text-white mb-6">
                    Estamos prontos para ajudar você a agendar uma consulta
                    jurídica.
                  </p>
                </div>
                <Button
                  onClick={() =>
                    window.open(
                      "https://wa.me/5541999203227?text=Olá,%20gostaria%20de%20marcar%20uma%20reunião%20ou%20consulta!",
                      "_blank"
                    )
                  }
                  className="w-full py-3 bg-gradient-to-r from-green-400 via-green-400 to-green-400 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2"
                >
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
