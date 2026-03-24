import { Instagram, Youtube, Mail, Send } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert('Pesan berhasil dikirim 🚀');
  };

  return (
    <div className="min-h-[70vh] flex items-center">
      <div className="grid md:grid-cols-2 gap-10 w-full">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold">Contact Me</h1>
          <p className="max-w-md opacity-80">
            Jika kamu tertarik untuk berkolaborasi, project, atau sekadar
            ngobrol, silakan hubungi saya melalui platform berikut atau kirim
            pesan langsung 👇
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="mailto:kevinpalulungan428@gmail.com"
              className="btn justify-start"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>

            <a
              href="https://instagram.com/kevinpalulungan"
              target="_blank"
              className="btn justify-start"
            >
              <Instagram size={18} />
              <span>Instagram</span>
            </a>

            <a
              href="https://youtube.com/@aliyosakevindrums.428"
              target="_blank"
              className="btn justify-start"
            >
              <Youtube size={18} />
              <span>YouTube</span>
            </a>
          </div>
        </div>

        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h3 className="card-title text-xl">Kirim Pesan</h3>

            <form onSubmit={handleSubmit} className="space-y-4 mt-3">
              <input
                type="text"
                placeholder="Nama kamu"
                className="input input-bordered w-full"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />

              <textarea
                className="textarea textarea-bordered w-full"
                rows={5}
                placeholder="Pesan kamu..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />

              <button type="submit" className="btn btn-primary w-full">
                <Send size={18} />
                <span>Kirim Pesan</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
