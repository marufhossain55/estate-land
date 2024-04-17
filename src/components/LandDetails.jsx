import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import { FaHome } from 'react-icons/fa';
import { useEffect } from 'react';
const LandDetails = () => {
  const { id } = useParams();
  const landDetails = useLoaderData();

  const location1 = useLocation();
  useEffect(() => {
    document.title = `${location1.pathname}`;
  }, [location1]);

  const singleLand = landDetails.find((card) => card.id == id);
  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image_url,
  } = singleLand;
  return (
    <section className='p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800'>
      <div className='container mx-auto space-y-12'>
        <div className='flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row'>
          <img
            src={image_url}
            alt=''
            className='h-80 dark:bg-gray-500 aspect-video'
          />
          <div className='flex flex-col justify-center flex-1 p-6 dark:bg-gray-50'>
            <span className='text-xs uppercase dark:text-gray-600 flex items-center gap-2 pb-2'>
              <FaLocationCrosshairs /> {location}
            </span>
            <span className='text-xs uppercase dark:text-gray-600 flex items-center gap-2 pb-2'>
              <FaHome /> {segment_name}
            </span>
            <h3 className='text-3xl font-bold pb-2'>{estate_title}</h3>
            <p className=' dark:text-gray-600 pb-2'>{description}</p>
            <div className='flex justify-around gap-6'>
              <div>
                <p className=' dark:text-gray-600 pb-2'>
                  <span className='font-bold'> price : </span>
                  {price}$
                </p>
                <p className=' dark:text-gray-600 pb-2'>
                  <span className='font-bold'> For : </span>
                  {status}
                </p>
                <p className=' dark:text-gray-600 pb-2'>
                  {' '}
                  <span className='font-bold'> total area : </span>
                  {area}
                </p>
              </div>
              <div>
                <p className='font-bold'>facilities</p>
                <p className=' dark:text-gray-600'>
                  {facilities.map((facility, idx) => (
                    <li key={idx}>{facility}</li>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LandDetails;
