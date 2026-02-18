import { SITE_CONFIG } from '@/lib/site';
import { whatsappLink } from '@/lib/utils';

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(SITE_CONFIG.WHATSAPP_NUMBER, 'Hola AXIS3D, quiero comenzar mi proyecto.')}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-axis-orange px-4 py-3 text-sm font-semibold text-white shadow-glow"
    >
      WhatsApp
    </a>
  );
}
