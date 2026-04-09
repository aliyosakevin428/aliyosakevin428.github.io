import { experiences } from '../../data/profileData';

const ExperienceSection = () => {
  return (
    <div className="bg-base-200 rounded-2xl p-6 shadow-md h-full">
      <h2 className="text-3xl font-bold mb-5">Experience</h2>

      <div className="relative border-l-2 border-gray-300 pl-6 space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[13px] top-1 w-6 h-6 bg-primary rounded-full border-4 border-white"></div>

            <div className="bg-base-300 p-5 rounded-xl shadow">
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
  );
};

export default ExperienceSection;