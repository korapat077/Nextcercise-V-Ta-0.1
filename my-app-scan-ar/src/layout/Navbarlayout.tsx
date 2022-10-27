import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';


const Navbarlayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )

}
export default Navbarlayout;