import { Flame } from "lucide-react";
import { LayoutDashboard } from "lucide-react";

const ProfilePage = () => {
  return ( 
    <>
    <div className="flex gap-10">
      <div className="flex-1 space-y-10">
      <h1 className="text-5xl font-bold">Welcome To My Web Profile</h1>
      <p>
        Halo nama saya Aliyosa Kevin. saya seorang Frontend Developer dan juga Content creator Real Drum Cover. Saya saat ini sedang melanjutkan pendidikan saya yaitu pendidikan vokasi LP3I di Kota Balikpapan. Saya juga menjadi Teknisi dan Cameraman Bersama Tim Multimedia Lahai-Roi. dan jika ada waktu luang saya memanfaat kan waktu tersebut dengan belajar atau membuat video dengan konten yang bertemakan cover lagu anime atau Vtuber.
      </p>
      </div>
      <div className="flex-none">
        <div className="avatar">
          <div className="w-48 rounded-lg"><img src="profile.png" alt="" /></div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-10">
      <div className="card bg-base-200">
        <div className="card-body">
          <h3 className="card-title">
            <LayoutDashboard className="stroke-accent fill-accent/50" />
            <span>Frontend Developer</span>
          </h3>

          <p>Saya Saat Ini Sedang Mendalami Ilmu untuk menjadi seorang Frontend Developer dikarenakan saya sangat tertarik di dunia programming. jadi saya mohon maaf jika desain dari website profile saya seperti ini karena saya masih belajar ^.^
          </p>
        </div>
      </div>
      <div><div className="card bg-base-200">
        <div className="card-body">
          <h3 className="card-title">
            <Flame className="stroke-secondary fill-secondary/50" />
            <span>Content Creator</span>
          </h3>
          <p>
          Saya Menjadi Content Creator awalnya hanya iseng saja tapi kok lama-lama banyak juga yang nonton video saya di Youtube, dan semenjak itu saya menjadi sering mengupload video pada channel saya di Youtube. walaupun saya sudah jarang upload video, subscriber saya masih tetap setia untuk menunggu saya mengupload video Real Drum Cover...
          </p>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default ProfilePage
