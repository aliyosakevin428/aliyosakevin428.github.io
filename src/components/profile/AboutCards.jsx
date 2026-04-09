import { Flame, LayoutDashboard } from 'lucide-react';

const AboutCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="card bg-base-200 shadow-md hover:shadow-lg transition duration-300">
        <div className="card-body">
          <h3 className="card-title">
            <LayoutDashboard className="stroke-accent fill-accent/50" />
            <span>Fullstack Developer (Website)</span>
          </h3>

          <p>
            Saya seorang lulusan baru dari pendidikan vokasi LP3I Balikpapan
            yang sudah memiliki pengalaman sebagai Fullstack Developer, terutama
            di bidang pengembangan website menggunakan Laravel Framework.
          </p>
        </div>
      </div>

      <div className="card bg-base-200 shadow-md hover:shadow-lg transition duration-300">
        <div className="card-body">
          <h3 className="card-title">
            <Flame className="stroke-secondary fill-secondary/50" />
            <span>Content Creator</span>
          </h3>

          <p>
            Berawal dari sekadar hobi, konten drum cover yang saya unggah di
            YouTube ternyata mendapat sambutan positif dari penonton. Hal
            tersebut memotivasi saya untuk terus berkonsistensi dan
            mengembangkan kualitas konten tersebut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCards;
