import { Outlet } from 'react-router-dom';
import NavLinks from '../components/NavLinks';
import Footer from '../components/Footer';

const Root = () => {
  return (
    <div>
      <NavLinks></NavLinks>
      <Outlet></Outlet>
      <div className='mt-[29rem]'>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default Root;
