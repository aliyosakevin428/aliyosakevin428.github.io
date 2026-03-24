import { MessageCircle } from 'lucide-react';

const WhatsappFloat = () => {
  const phoneNumber = '6289693997765';
  const message =
    'Halo Kevin, saya tertarik untuk berkolaborasi project dengan Anda.';

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-bounce"
    >
      <div className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
        <MessageCircle size={20} />

        <span className="hidden md:inline text-sm font-medium">Chat Me</span>
      </div>
    </a>
  );
};

export default WhatsappFloat;
