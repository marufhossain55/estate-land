import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from './Banner';

const Home = () => {
  /////////////
  const location = useLocation();
  useEffect(() => {
    document.title = `Home`;
  }, [location]);
  //////////////////

  return (
    <div>
      <Banner></Banner>
    </div>
  );
};
export default Home;
