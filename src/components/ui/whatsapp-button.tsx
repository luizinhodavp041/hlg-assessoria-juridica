// src/components/ui/whatsapp-button.tsx
import { MessageCircle } from "lucide-react";
import Link from "next/link";

interface WhatsAppButtonProps {
  phoneNumber?: string;
}

export function WhatsAppButton({
  phoneNumber = "5511999999999",
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      aria-label="Contactar via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </Link>
  );
}
