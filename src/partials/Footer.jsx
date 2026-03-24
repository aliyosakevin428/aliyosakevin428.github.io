const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-5">
      <aside>
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} - All right reserved by Aliyosa
          Kevin using Vite + React
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
