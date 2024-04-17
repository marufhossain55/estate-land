import EstateDetails from './EstateDetails';

const Estates = ({ lands }) => {
  return (
    <div className='grid grid-cols-3 container mx-auto '>
      {lands.map((land) => (
        <EstateDetails key={land.id} land={land}></EstateDetails>
      ))}
    </div>
  );
};
export default Estates;
