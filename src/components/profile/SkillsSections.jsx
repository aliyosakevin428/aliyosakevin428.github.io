import { skills } from '../../data/profileData';

const SkillsSection = () => {
  return (
    <div
      className="
      bg-white/5 
      backdrop-blur-lg 
      border border-white/10 
      rounded-2xl 
      p-6 
      h-full
      transition-all
      duration-1000
      ease-out
    "
    >
      <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        My Skills
      </h2>

      <div className="space-y-5">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={index}
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
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <Icon className={`text-lg ${skill.iconClass}`} />
                  <span className="font-medium">{skill.name}</span>
                </div>
                <span className="text-xs text-white/60">{skill.level}%</span>
              </div>

              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;
