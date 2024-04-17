import { useLoaderData, useParams } from 'react-router-dom';

const LandDetails = () => {
  const { id } = useParams();
  const landDetails = useLoaderData();

  const singleLand = landDetails.find((card) => card.id == id);
  console.log(singleLand);
  return <div>LandDetails</div>;
};
export default LandDetails;
