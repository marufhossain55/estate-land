import EstateDetails from './EstateDetails';
import 'animate.css';
const Estates = ({ lands }) => {
  return (
    <div>
      <h1 className='font-bold text-4xl text-center mt-20 animate__animated animate__pulse'>
        {' '}
        Our offring Lands
      </h1>
      ;
      <div className='mt-10'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto space-y-6'>
          {/* className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto space-y-6' */}
          {lands.map((land) => (
            <EstateDetails key={land.id} land={land}></EstateDetails>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Estates;
