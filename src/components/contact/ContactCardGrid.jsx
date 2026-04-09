import { ArrowUpRight } from 'lucide-react';
import { contactLinks } from './contactData';

const ContactCardGrid = () => {
  return (
    <div className="grid sm:grid-cols-4 gap-8">
      {contactLinks.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="group block"
        >
          <div className="h-full rounded-3xl border border-base-300 bg-base-200/80 backdrop-blur-md p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary">
            <div className="flex flex-col justify-between h-full gap-5">
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition duration-300">
                  {item.icon}
                </div>

                <ArrowUpRight className="opacity-40 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm opacity-70">{item.desc}</p>
                <p className="font-medium break-all">{item.value}</p>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ContactCardGrid;
