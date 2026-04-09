import AboutCards from '../components/profile/AboutCards';
import ExperienceSection from '../components/profile/ExperienceSection';
import HeroSection from '../components/profile/HeroSection';
import SkillsSection from '../components/profile/SkillsSections';

const ProfilePage = () => {
  return (
    <section className="px-4 md:px-6 lg:px-8 py-8 md:py-12">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        <HeroSection />
        <AboutCards />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-10 items-start">
          <SkillsSection />
          <ExperienceSection />
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
