import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Hero() {
  SwiperCore.use([Autoplay]);
  return (
    <header className='relative w-full min-h-[37.5rem]'>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        pagination={{
          clickable: true,
        }}
        className='w-full h-full min-h-[37.5rem]'
      >
        <SwiperSlide>
          <div className='relative h-full w-full min-h-[37.5rem] flex items-center'>
            <div className='z-0 absolute top-0 h-full w-full overflow-hidden'>
              <Image
                className='object-cover'
                src='https://image.tmdb.org/t/p/w1280//ypFD4TJ3nLJesou76V59CnweaT0.jpg'
                alt='Emancipación (Emancipation)'
                fill
              />
            </div>
            <div className='relative z-10 w-full pl-32 pr-20'>
              <h2 className='text-5xl font-bold tracking-tight text-white'>
                Emancipation
              </h2>
              <h3 className='font-normal text-base text-zinc-300 mt-2'>
                <span className='bg-zinc-500 rounded p-1 mr-2 text-sm'>
                  12+
                </span>
                2022 • 2h 12m
              </h3>
              <h3 className='font-normal text-base text-zinc-300 mt-1'>
                Suspense | Drama | Action
              </h3>
              <p className='font-normal text-lg text-white max-w-2xl mt-2'>
                Sheriff's deputy Rick Grimes awakens from a coma to find a
                post-apocalyptic world dominated by flesh-eating zombies. He
                sets out to find his family and encounters many other survivors
                along the way.
              </p>
              <div className='mt-4 flex'>
                <button className='text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 -ml-1 w-5 h-5 fill-white'
                    viewBox='0 0 512 512'
                  >
                    <path d='M133 440a35.37 35.37 0 01-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0135.77.45l247.85 148.36a36 36 0 010 61l-247.89 148.4A35.5 35.5 0 01133 440z' />
                  </svg>
                  Watch Movie
                </button>
                <button
                  type='button'
                  className='border focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 bg-zinc-800/40 text-white border-zinc-600 hover:bg-zinc-700 hover:border-zinc-600 focus:ring-zinc-700'
                >
                  Trailer
                </button>
              </div>
            </div>
          </div>
          <div className='z-0 absolute top-0 w-full min-h-[37.5rem] bg-gradient-to-t from-zinc-900 to-transparent'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative h-full w-full min-h-[37.5rem] flex items-center'>
            <div className='z-0 absolute top-0 h-full w-full overflow-hidden'>
              <Image
                className='object-cover'
                src='https://image.tmdb.org/t/p/w1280//rfnmMYuZ6EKOBvQLp2wqP21v7sI.jpg'
                alt='Guardianes de la Galaxia: El especial de las fiestas'
                fill
              />
            </div>
            <div className='relative z-10 w-full pl-32 pr-20'>
              <h2 className='text-5xl font-bold tracking-tight text-white'>
                Guardianes de la Galaxia: El especial de las fiestas
              </h2>
              <h3 className='font-normal text-base text-zinc-300 mt-2'>
                <span className='bg-zinc-500 rounded p-1 mr-2 text-sm'>
                  12+
                </span>
                2022 • 2h 12m
              </h3>
              <h3 className='font-normal text-base text-zinc-300 mt-1'>
                Suspense | Drama | Action
              </h3>
              <p className='font-normal text-lg text-white max-w-2xl mt-2'>
                Sheriff's deputy Rick Grimes awakens from a coma to find a
                post-apocalyptic world dominated by flesh-eating zombies. He
                sets out to find his family and encounters many other survivors
                along the way.
              </p>
              <div className='mt-4 flex'>
                <button className='text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 -ml-1 w-5 h-5 fill-white'
                    viewBox='0 0 512 512'
                  >
                    <path d='M133 440a35.37 35.37 0 01-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0135.77.45l247.85 148.36a36 36 0 010 61l-247.89 148.4A35.5 35.5 0 01133 440z' />
                  </svg>
                  Watch Movie
                </button>
                <button
                  type='button'
                  className='border focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 bg-zinc-800/40 text-white border-zinc-600 hover:bg-zinc-700 hover:border-zinc-600 focus:ring-zinc-700'
                >
                  Trailer
                </button>
              </div>
            </div>
          </div>
          <div className='z-0 absolute top-0 w-full min-h-[37.5rem] bg-gradient-to-t from-zinc-900 to-transparent'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative h-full w-full min-h-[37.5rem] flex items-center'>
            <div className='z-0 absolute top-0 h-full w-full overflow-hidden'>
              <Image
                className='object-cover'
                src='https://image.tmdb.org/t/p/w1280//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg'
                alt='Black Adam'
                fill
              />
            </div>
            <div className='relative z-10 w-full pl-32 pr-20'>
              <h2 className='text-5xl font-bold tracking-tight text-white'>
                Black Adam
              </h2>
              <h3 className='font-normal text-base text-zinc-300 mt-2'>
                <span className='bg-zinc-500 rounded p-1 mr-2 text-sm'>
                  13+
                </span>
                2022 • 2h 5m
              </h3>
              <h3 className='font-normal text-base text-zinc-300 mt-1'>
                Action | Fantasy | Science Fiction
              </h3>
              <p className='font-normal text-lg text-white max-w-2xl mt-2'>
                Nearly 5,000 years after he was bestowed with the almighty
                powers of the Egyptian gods—and imprisoned just as quickly—Black
                Adam is freed from his earthly tomb, ready to unleash his unique
                form of justice on the modern world.
              </p>
              <div className='mt-4 flex'>
                <button className='text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 -ml-1 w-5 h-5 fill-white'
                    viewBox='0 0 512 512'
                  >
                    <path d='M133 440a35.37 35.37 0 01-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0135.77.45l247.85 148.36a36 36 0 010 61l-247.89 148.4A35.5 35.5 0 01133 440z' />
                  </svg>
                  Watch Movie
                </button>
                <button
                  type='button'
                  className='border focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 bg-zinc-800/40 text-white border-zinc-600 hover:bg-zinc-700 hover:border-zinc-600 focus:ring-zinc-700'
                >
                  Trailer
                </button>
              </div>
            </div>
          </div>
          <div className='z-0 absolute top-0 w-full min-h-[37.5rem] bg-gradient-to-t from-zinc-900 to-transparent'></div>
        </SwiperSlide>
      </Swiper>
    </header>
  );
}
