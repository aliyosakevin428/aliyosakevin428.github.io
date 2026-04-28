import { educations } from '../../data/profileData';

const EducationSection = () => {
  return (
    <div
      className="
      bg-white/5 
      backdrop-blur-lg 
      border border-white/10 
      rounded-2xl 
      p-6 
      h-auto
    "
    >
      <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Education
      </h2>

      <div className="relative border-l border-white/20 pl-6 space-y-8">
        {educations.map((edu, index) => (
          <div key={index} className="relative">
            <div
              className="
              absolute -left-[9px] top-2 
              w-4 h-4 
              bg-gradient-to-r from-blue-400 to-purple-400 
              rounded-full 
              border-2 border-[#0f172a]
            "
            ></div>

            <div
              className="
              bg-white/5 
              border border-white/10 
              p-4 
              rounded-xl 
              hover:bg-white/10 
              hover:translate-x-1
              transition duration-300
            "
            >
              <h3 className="font-semibold text-base">{edu.title}</h3>

              <p className="text-xs text-white/60 mt-1">
                {edu.place} • {edu.year}
              </p>

              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
