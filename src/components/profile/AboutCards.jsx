import { Flame, LayoutDashboard } from 'lucide-react';

const AboutCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        className="
        bg-white/10 
        backdrop-blur-md 
        border border-white/10 
        rounded-2xl 
        p-6 
        hover:bg-white/15 
        transition duration-300
      "
      >
        <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
          <LayoutDashboard className="text-blue-400" />
          <span>Website Developer</span>
        </h3>

        <p className="text-sm text-white/80 leading-relaxed">
          Saya seorang lulusan baru dari pendidikan vokasi LP3I Balikpapan yang
          sudah memiliki pengalaman sebagai Fullstack Developer, terutama di
          bidang pengembangan website menggunakan Laravel Framework.
        </p>
      </div>

      <div
        className="
        bg-white/10 
        backdrop-blur-md 
        border border-white/10 
        rounded-2xl 
        p-6 
        hover:bg-white/15 
        transition duration-300
      "
      >
        <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
          <Flame className="text-purple-400" />
          <span>Content Creator</span>
        </h3>

        <p className="text-sm text-white/80 leading-relaxed">
          Berawal dari sekadar hobi, konten drum cover yang saya unggah di
          YouTube ternyata mendapat sambutan positif dari penonton. Hal tersebut
          memotivasi saya untuk terus berkonsistensi dan mengembangkan kualitas
          konten tersebut.
        </p>
      </div>
    </div>
  );
};

export default AboutCards;
