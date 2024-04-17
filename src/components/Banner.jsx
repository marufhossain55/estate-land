import img1 from '../assets/Agricultural.jpg';
import img2 from '../assets/ranches.jpg';
import img3 from '../assets/vineyards.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
const Banner = () => {
  return (
    <div className='container mx-auto mt-10'>
      <div className='lg:w-[120vh] mx-auto md:w-[50vh] md:mt-20 w-[30vh]'>
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className='mySwiper'
        >
          <SwiperSlide>
            <div
              className='rounded-2xl border-red-500'
              style={{
                background: `
                linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
                url(${img1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '65vw',
                height: '55vh',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <h1 className='font-bold text-4xl text-center w-1/2 mb-4'>
                Unlock the Potential of Fertile Grounds
              </h1>
              <p className='text-center w-1/2 mb-4 lg:block md:block hidden'>
                "Embrace the opportunity to cultivate your dreams on vast
                expanses of fertile soil. Our agricultural land offerings,
                available for sale or rent, provide the perfect canvas for
                farming ventures, sustainable agriculture projects, or land
                development endeavors. From expansive plains to rolling hills,
                these prime parcels of land offer endless possibilities for
                growth and prosperity. Seize the chance to harness the power of
                the land and cultivate your vision today."
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className='flex flex-col justify-center items-center w-[65vw] h-[55vh] rounded-2xl'
              style={{
                background: `
                linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
                url(${img2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
              }}
            >
              <h1 className='font-bold text-4xl text-center w-1/2 mb-4'>
                Live the Cowboy Dream: Ranches for Sale or Rent
              </h1>
              <p className='text-center w-1/2 mb-4 lg:block md:block hidden'>
                Escape to the enchanting world of ranch living with our
                selection of exquisite properties available for sale or rent.
                Whether you seek a sprawling cattle ranch, a picturesque
                equestrian estate, or a rustic retreat nestled amidst nature,
                our ranch offerings cater to your every desire. Experience the
                freedom, adventure, and tranquility of ranch life as you embark
                on a journey to create lasting memories and traditions. Discover
                your slice of Western paradise today.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className='flex flex-col justify-center items-center w-[65vw] h-[55vh] rounded-2xl'
              style={{
                background: `
                linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
                url(${img3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
              }}
            >
              <h1 className='font-bold text-4xl text-center w-1/2 mb-4'>
                Toast to Luxury Living: Vineyards Available for Sale or Rent
              </h1>
              <p className='text-center w-1/2 mb-4 lg:block md:block hidden'>
                Indulge in the elegance and sophistication of vineyard ownership
                with our exclusive selection of properties available for sale or
                rent. From sun-kissed slopes to scenic valleys, these vineyards
                offer a taste of the good life, where every sip tells a story
                and every grape embodies the essence of terroir. Whether you're
                a wine enthusiast, an aspiring vintner, or a discerning
                investor, our vineyard offerings promise a lifestyle of luxury,
                leisure, and legacy. Raise a glass to your dreams and uncork the
                possibilities today."
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Banner;
