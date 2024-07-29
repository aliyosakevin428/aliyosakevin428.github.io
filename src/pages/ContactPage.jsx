import { Instagram } from "lucide-react";
import { Youtube } from "lucide-react";
import { Twitter } from "lucide-react";
import { Mail } from "lucide-react";
import { Send } from "lucide-react";

const ContactPage = () => {

  return (
  <>
    <div className="grid grid-cols-2 gap-10">
      <div className="space-y-10">
        <h1 className="text-5xl font-bold">Contact Me</h1>
        <p>
        Jika anda berminat untuk berkolaborasi dengan saya silahkan hubungi saya...
        </p>
        <div className="flex-wrap space-x-1">
          <button className="btn">
            <Mail size={20} />
            <span>kevinpalulungan420@gmail.com</span>
          </button>
          <button className="btn">
            <Instagram size={20} />
            <span>kevinpalulungan</span>
          </button>
          <button className="btn">
            <Youtube size={20} />
            <span>Aliyosa Kevin / ケヴィン drums.</span>
          </button>
        </div>
      </div>
      <div className="card bg-base-200">
        <div className="card-body">
          <h3 className="card-title">Hubungi Saya:</h3>
          
          <div className="py-4 space-y-2">
          <input type="text" className="input w-full" placeholder="Nama dan email kamu" />
          <textarea type="text" className="textarea w-full" rows={5} placeholder="Pertanyaan atau ajakan kolaborasi"></textarea>
          </div>

          <div className="card-actions">
            <button className="btn btn-primary">
              <Send size={20} />
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </>

  );
};

export default ContactPage
