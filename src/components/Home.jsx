import { useEffect } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import Banner from './Banner';
import Estates from './Estates';

const Home = () => {
  /////////////
  const location = useLocation();
  useEffect(() => {
    document.title = `Home`;
  }, [location]);
  //////////////////
  const lands = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Estates lands={lands}></Estates>
    </div>
  );
};
export default Home;
