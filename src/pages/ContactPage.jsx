import {
  Github,
  Instagram,
  Youtube,
  Mail,
  ArrowUpRight,
  Briefcase,
} from 'lucide-react';

const ContactPage = () => {
  const contactLinks = [
    {
      name: 'Email',
      value: 'kevinpalulungan428@gmail.com',
      href: 'mailto:kevinpalulungan428@gmail.com',
      icon: <Mail size={22} />,
      desc: 'Hubungi saya langsung via email',
    },
    {
      name: 'Instagram',
      value: '@kevinpalulungan',
      href: 'https://instagram.com/kevinpalulungan',
      icon: <Instagram size={22} />,
      desc: 'Lihat aktivitas & personal branding saya',
    },
    {
      name: 'YouTube',
      value: '@aliyosakevindrums.428',
      href: 'https://youtube.com/@aliyosakevindrums.428',
      icon: <Youtube size={22} />,
      desc: 'Konten dan aktivitas kreatif saya',
    },
    {
      name: 'GitHub',
      value: 'aliyosakevin428',
      href: 'https://github.com/aliyosakevin428',
      icon: <Github size={22} />,
      desc: 'Lihat project dan source code saya',
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-10 px-4 md:px-8"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="badge badge-primary badge-outline gap-2 px-4 py-4">
              <Briefcase size={16} />
              Available for Collaboration
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Let’s Build <br />
                Something Great Together.
              </h1>

              <p className="text-base md:text-lg opacity-75 max-w-xl leading-relaxed">
                Saya terbuka untuk diskusi project, kolaborasi, freelance work,
                atau sekadar ngobrol seputar web development, teknologi, dan
                ide-ide kreatif.
              </p>
            </div>

            <div className="stats shadow bg-base-200 border border-base-300 w-full max-w-md">
              <div className="stat">
                <div className="stat-title">Status</div>
                <div className="stat-value text-primary text-2xl">Open</div>
                <div className="stat-desc">Freelance / Collaboration</div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {contactLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="rounded-3xl border border-base-300 bg-base-200/70 backdrop-blur-md p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                        {item.icon}
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <p className="text-sm opacity-70 mt-1">{item.desc}</p>
                        <p className="mt-3 font-medium">{item.value}</p>
                      </div>
                    </div>

                    <ArrowUpRight className="opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
