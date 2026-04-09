import { Download, Eye, Briefcase } from 'lucide-react';

const ContactHero = () => {
  return (
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
          Saya terbuka untuk diskusi project, kolaborasi, freelance work, atau
          sekadar ngobrol seputar web development, teknologi, dan ide-ide
          kreatif.
        </p>
      </div>

      <div className="stats shadow bg-base-200 border border-base-300 w-full max-w-md">
        <div className="stat">
          <div className="stat-title">Status</div>
          <div className="stat-value text-primary text-2xl">Open</div>
          <div className="stat-desc">Freelance / Collaboration</div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/CV_Aliyosa_Kevin.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary rounded-xl px-6 shadow-md hover:scale-105 transition duration-300"
            >
              <Eye size={18} />
              <span>View CV</span>
            </a>

            <a
              href="/CV_Aliyosa_Kevin.pdf"
              download="CV-Aliyosa-Kevin.pdf"
              className="btn btn-primary rounded-xl px-6 shadow-md hover:scale-105 transition duration-300"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
