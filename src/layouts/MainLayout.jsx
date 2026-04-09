import { Outlet } from 'react-router-dom';
import Navbar from '../partials/Navbar';
import Footer from '../partials/Footer';
// import WhatsappFloat from '../components/WhatsappFloat'

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-10 space-y-12">
          <Outlet />
        </div>
      </main>

      {/* <WhatsappFloat /> */}
      <Footer />
    </div>
  );
};

export default MainLayout;
