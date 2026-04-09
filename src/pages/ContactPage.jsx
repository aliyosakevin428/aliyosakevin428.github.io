import ContactCardGrid from '../components/contact/ContactCardGrid';
import ContactForm from '../components/contact/ContactForm';
import ContactHero from '../components/contact/ContactHero';

const ContactPage = () => {
  return (
    <section id="contact" className="min-h-screen py-16 px-4 md:px-6">
      <div className="container mx-auto space-y-20">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <ContactHero />
          <ContactForm />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-7 text-center">Find Me On Social Media</h2>
          <ContactCardGrid />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
