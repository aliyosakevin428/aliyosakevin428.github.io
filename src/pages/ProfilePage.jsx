import AboutCards from '../components/profile/AboutCards';
import CertificateSection from '../components/profile/CertificateSection';
import EducationSection from '../components/profile/EducationSection';
import ExperienceSection from '../components/profile/ExperienceSection';
import HeroSection from '../components/profile/HeroSection';
import SkillsSection from '../components/profile/SkillsSections';

const ProfilePage = () => {
  return (
    <section className="px-4 md:px-6 lg:px-8 py-8 md:py-12">
      <div className="max-w-7xl mx-auto space-y-10 md:space-y-12">
        <HeroSection />
        <AboutCards />

        <div
          className="
          bg-white/5 
          border border-white/10 
          rounded-3xl 
          p-4 md:p-6
        "
        >
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 md:gap-6 items-start">
            <EducationSection />
            <CertificateSection />
            <SkillsSection />
            <ExperienceSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
