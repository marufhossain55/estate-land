import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Purchasehistory = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = `${location.pathname}`;
  }, [location]);
  return (
    <div className='container mx-auto flex justify-center'>
      <h1 className=' font-bold text-2xl'>Data Uploding soon........</h1>
    </div>
  );
};
export default Purchasehistory;
