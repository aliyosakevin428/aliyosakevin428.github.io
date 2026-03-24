import { Outlet } from 'react-router-dom'
import Navbar from '../partials/Navbar'
import Footer from '../partials/Footer'
import WhatsappFloat from '../components/WhatsappFloat'

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container max-w-10xl p-10 space-y-12">
      <Outlet />
      </div>
      <WhatsappFloat />
      <Footer />
    </div>
  )
}

export default MainLayout
