import { Download, Eye } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
      <div className="flex-1 space-y-4 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Welcome To My Web Profile
        </h1>

        <p className="text-sm sm:text-base leading-7 sm:leading-8 text-gray-300 max-w-2xl mx-auto lg:mx-0">
          Saya merupakan lulusan baru pendidikan vokasi dari LP3I Balikpapan
          dengan pengalaman sebagai Fullstack Developer, khususnya dalam
          pengembangan website menggunakan framework Laravel. Selain itu, saya
          juga aktif sebagai teknisi dan kameramen di Tim Multimedia Lahai-Roi.
          Di luar kegiatan tersebut, saya memanfaatkan waktu luang untuk belajar
          mandiri serta membuat konten cover lagu anime dan Vtuber.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 pt-2">
          <a
            href="/CV_Aliyosa_Kevin.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-primary rounded-xl px-6 shadow-md hover:scale-105 transition duration-300 w-full sm:w-auto"
          >
            <Eye size={18} />
            <span>View CV</span>
          </a>

          <a
            href="/CV_Aliyosa_Kevin.pdf"
            download="CV-Aliyosa-Kevin.pdf"
            className="btn btn-primary rounded-xl px-6 shadow-md hover:scale-105 transition duration-300 w-full sm:w-auto"
          >
            <Download size={18} />
            <span>Download CV</span>
          </a>
        </div>
      </div>

      <div className="flex justify-center w-full lg:w-auto">
        <div className="avatar">
          <div className="w-40 sm:w-52 lg:w-64 rounded-3xl shadow-lg ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="/images/kevin-bg-blue.png" alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
