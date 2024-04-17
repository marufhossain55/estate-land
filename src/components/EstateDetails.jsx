import { MdHomeFilled, MdOutlineSell } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import { IoPricetag } from 'react-icons/io5';
import { MdAttachMoney } from 'react-icons/md';
import { Link } from 'react-router-dom';

const EstateDetails = ({ land }) => {
  const {
    estate_title,
    segment_name,
    price,
    status,
    image_url,
    location,
    facilities,
    area,
    id,
  } = land;
  return (
    <div className='max-w-[23rem] rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800  '>
      <img
        src={image_url}
        alt={estate_title}
        className='object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500'
      />
      <div className='flex flex-col justify-between p-6 space-y-8'>
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold tracking-wide border-b-2 pb-2'>
            {estate_title}
          </h2>
          <div className='flex justify-between border-b-2 pb-4'>
            <div>
              <p className='dark:text-gray-800 text-xl font-semibold flex items-center gap-2 '>
                <MdHomeFilled />
                {segment_name}
              </p>
              <p className='dark:text-gray-800 flex items-center gap-2'>
                <MdOutlineSell />
                <span className='font-semibold'>For:</span> {status}
              </p>
            </div>
            <div>
              <p className='flex items-center gap-2'>
                <IoLocationSharp />
                {location}
              </p>
              <p className='flex items-center gap-2'>
                <MdAttachMoney />
                {price}
              </p>
            </div>
          </div>
          <div className='text-center border-b-2 pb-4'>
            <span className='font-semibold '>Area:</span> {area}
          </div>
          <div>
            {facilities.map((facility, idx) => (
              <li key={idx}>{facility}</li>
            ))}
          </div>
        </div>
        <Link
          to={`/land/${id}`}
          type='button'
          className=' btn btn-accent flex items-center justify-center w-full   tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 font-bold '
        >
          View Property
        </Link>
      </div>
    </div>
  );
};
export default EstateDetails;
