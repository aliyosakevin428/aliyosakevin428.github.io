import { Flame, LayoutDashboard } from 'lucide-react';
import {
  SiExpress,
  SiLaravel,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const skills = [
  {
    name: 'Laravel',
    level: 83,
    icon: <SiLaravel className="text-red-500 text-xl" />,
    color: 'bg-red-500',
  },
  {
    name: 'Tailwind CSS',
    level: 75,
    icon: <SiTailwindcss className="text-pink-500 text-xl" />,
    color: 'bg-pink-500',
  },
  {
    name: 'React',
    level: 65,
    icon: <SiReact className="text-blue-400 text-xl" />,
    color: 'bg-blue-400',
  },
  {
    name: 'TypeScript',
    level: 68,
    icon: <SiTypescript className="text-blue-600 text-xl" />,
    color: 'bg-blue-600',
  },
  {
    name: 'ExpressJS',
    level: 60,
    icon: <SiExpress className="text-orange-500 text-xl" />,
    color: 'bg-orange-500',
  },
  {
    name: 'React Native (Expo)',
    level: 65,
    icon: <SiReact className="text-blue-400 text-xl" />,
    color: 'bg-blue-400',
  },
];

const experiences = [
  {
    title: 'Fullstack Developer',
    place: 'Self Learning',
    year: '2023 - Sekarang',
    desc: 'Mempelajari React, Laravel, TypeScript, dan membangun berbagai project website.',
  },
  {
    title: 'Content Creator (Drum Cover)',
    place: 'YouTube',
    year: '2022 - Sekarang',
    desc: 'Membuat konten drum cover anime & Vtuber dan membangun audience.',
  },
  {
    title: 'Backend Developer',
    place: 'AxiomDev Software House',
    year: '2025 - Sekarang',
    desc: 'Membangun API beserta database menggunakan Laravel dan MySQL untuk membangun website AxiomDev dengan Endpoint yang lengkap.',
  },
];

const ProfilePage = () => {
  return (
    <div className="space-y-16">
      <div className="flex gap-10 items-center">
        <div className="flex-1 space-y-5">
          <h1 className="text-5xl font-bold">Welcome To My Web Profile</h1>
          <p>
            Saya seorang lulusan baru dari pendidikan vokasi LP3I Balikpapan
            yang sudah memiliki pengalaman sebagai Fullstack Developer, terutama
            di bidang pengembangan website menggunakan Laravel. Selain itu, saya
            juga aktif sebagai teknisi dan kameramen di Tim Multimedia
            Lahai-Roi. Di sela-sela kesibukan, saya mengisi waktu luang dengan
            belajar dan membuat konten cover lagu anime serta Vtuber.
          </p>
        </div>

        <div>
          <div className="avatar">
            <div className="w-48 rounded-xl shadow-lg">
              <img src="profile.png" alt="profile" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">
              <LayoutDashboard className="stroke-accent fill-accent/50" />
              <span>Fullstack Developer (Web)</span>
            </h3>

            <p>
              Saya seorang lulusan baru dari pendidikan vokasi LP3I Balikpapan
              yang sudah memiliki pengalaman sebagai Fullstack Developer,
              terutama di bidang pengembangan website menggunakan Laravel
              Framework.
            </p>
          </div>
        </div>

        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">
              <Flame className="stroke-secondary fill-secondary/50" />
              <span>Content Creator</span>
            </h3>

            <p>
              Awalnya hanya iseng membuat konten, tapi ternyata banyak yang
              menonton video saya di YouTube sehingga saya semakin konsisten
              membuat konten drum cover.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-5">My Skills</h2>

        <div className="space-y-5">
          {skills.map((skill, index) => (
            <div key={index} className="bg-base-200 p-5 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  {skill.icon}
                  <span className="font-semibold">{skill.name}</span>
                </div>
                <span className="text-sm">{skill.level}%</span>
              </div>

              <div className="w-full bg-gray-300 rounded-full h-3">
                <div
                  className={`${skill.color} h-3 rounded-full transition-all duration-500`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-5">Experience</h2>

        <div className="relative border-l-2 border-gray-300 pl-6 space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[13px] top-1 w-6 h-6 bg-primary rounded-full border-4 border-white"></div>

              <div className="bg-base-200 p-5 rounded-xl shadow">
                <h3 className="font-bold text-lg">{exp.title}</h3>
                <p className="text-sm opacity-70">
                  {exp.place} • {exp.year}
                </p>
                <p className="mt-2">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
