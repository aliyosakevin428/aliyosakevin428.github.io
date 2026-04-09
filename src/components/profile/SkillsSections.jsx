import { skills } from '../../data/profileData';

const SkillsSection = () => {
  return (
    <div className="bg-base-200 rounded-2xl p-6 shadow-md h-full">
      <h2 className="text-3xl font-bold mb-5">My Skills</h2>

      <div className="space-y-5">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div key={index} className="bg-base-300 p-5 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <Icon className={`text-xl ${skill.iconClass}`} />
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
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;
