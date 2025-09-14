import { Phone } from 'lucide-react';

export function FloatingWhatsApp() {
  const bookingMessage = "Hi! I'd like to book a cab.";
  const whatsappUrl = `https://web.whatsapp.com/send?phone=917999114272&text=${encodeURIComponent(bookingMessage)}`;
  return (
    <div className="floating-wpp">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Chat on WhatsApp"
      >
        <Phone className="w-8 h-8 text-white" />
      </a>
    </div>
  );
}
