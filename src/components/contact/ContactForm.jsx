import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { User, Send, MessageSquare, Mail, Briefcase } from 'lucide-react';

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');
    setIsSuccess(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          setStatusMessage('Pesan berhasil dikirim! 🚀');
          setIsSuccess(true);
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error('FAILED...', error);
          setStatusMessage('Gagal mengirim pesan. Coba lagi ya 😥');
          setIsSuccess(false);
          setLoading(false);
        },
      );
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="rounded-3xl border border-base-300 bg-base-200/80 backdrop-blur-md p-5 sm:p-6 md:p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Send Me a Message
          </h2>
          <p className="opacity-70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Punya ide project atau ingin berkolaborasi? Silakan kirim pesan
            melalui form di bawah ini.
          </p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-medium">Nama</span>
            </div>
            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 opacity-50"
              />
              <input
                type="text"
                name="user_name"
                placeholder="Masukkan nama Anda"
                required
                className="input input-bordered w-full pl-12 rounded-2xl focus:outline-none focus:border-primary"
              />
            </div>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-medium">Email</span>
            </div>
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 opacity-50"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Masukkan email Anda"
                required
                className="input input-bordered w-full pl-12 rounded-2xl focus:outline-none focus:border-primary"
              />
            </div>
          </label>

          <label className="form-control md:col-span-2 w-full">
            <div className="label">
              <span className="label-text font-medium">Subjek</span>
            </div>
            <div className="relative">
              <Briefcase
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 opacity-50"
              />
              <input
                type="text"
                name="subject"
                placeholder="Contoh: Kolaborasi Project Website"
                required
                className="input input-bordered w-full pl-12 rounded-2xl focus:outline-none focus:border-primary"
              />
            </div>
          </label>

          <label className="form-control md:col-span-2 w-full">
            <div className="label">
              <span className="label-text font-medium">Pesan</span>
            </div>
            <div className="relative">
              <MessageSquare
                size={18}
                className="absolute left-4 top-5 opacity-50"
              />
              <textarea
                rows="6"
                name="message"
                placeholder="Tulis pesan Anda di sini..."
                required
                className="textarea textarea-bordered w-full pl-12 pt-4 rounded-2xl focus:outline-none focus:border-primary"
              ></textarea>
            </div>
          </label>

          <div className="md:col-span-2 pt-2 space-y-4">
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full sm:w-auto rounded-2xl px-8 shadow-md hover:scale-105 transition duration-300 disabled:opacity-70"
            >
              <Send size={18} />
              <span>{loading ? 'Sending...' : 'Send Message'}</span>
            </button>

            {statusMessage && (
              <div
                className={`alert rounded-2xl text-sm ${
                  isSuccess ? 'alert-success' : 'alert-error'
                }`}
              >
                <span>{statusMessage}</span>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
