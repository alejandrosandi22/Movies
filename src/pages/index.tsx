import Footer from 'components/footer';
import Hero from 'components/hero';
import MostRecent from 'components/mostRecent';
import Nav from 'components/shared/nav';
import Upcoming from 'components/upcoming';
import AppLayout from 'layouts/appLayout';
import NavLayout from 'layouts/navLayout';
import Link from 'next/link';

export default function Home() {
  return (
    <AppLayout
      title='Movies'
      description="Are you a movie fanatic looking for the perfect place to stream or rent the latest releases and classic films? Look no further! Our movies website is your one-stop destination for all your cinematic needs. With a wide selection of genres and titles to choose from, you're sure to find something that speaks to you. So why wait? Start streaming or renting your favorite movies today and discover something new and exciting!"
    >
      <NavLayout>
        <div className='w-full min-h-screen bg-zinc-900'>
          <Hero />
          <main className='min-h-screen pl-28 pr-20'>
            <div className='flex justify-between items-center'>
              <h2 className='font-medium text-white text-3xl pl-5'>
                Most popular
              </h2>
              <Link
                className='flex items-center font-normal text-gray-400 hover:text-white'
                href='/'
              >
                See all
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='ml-1 w-5 h-5'
                  viewBox='0 0 512 512'
                >
                  <title>Chevron Forward</title>
                  <path
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='35'
                    d='M184 112l144 144-144 144'
                  />
                </svg>
              </Link>
            </div>
            <MostRecent />
            <div className='flex justify-between items-center'>
              <h2 className='font-medium text-white text-3xl pl-5'>
                Recent releases
              </h2>
              <Link
                className='flex items-center font-normal text-gray-400 hover:text-white'
                href='/'
              >
                See all
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='ml-1 w-5 h-5'
                  viewBox='0 0 512 512'
                >
                  <title>Chevron Forward</title>
                  <path
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='35'
                    d='M184 112l144 144-144 144'
                  />
                </svg>
              </Link>
            </div>
            <MostRecent />
            <h2 className='font-medium text-white text-3xl mt-10 pl-5'>
              Upcoming
            </h2>
            <Upcoming />
            <div className='flex justify-between items-center'>
              <h2 className='font-medium text-white text-3xl pl-5'>Action</h2>
              <Link
                className='flex items-center font-normal text-gray-400 hover:text-white'
                href='/'
              >
                See all
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='ml-1 w-5 h-5'
                  viewBox='0 0 512 512'
                >
                  <title>Chevron Forward</title>
                  <path
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='35'
                    d='M184 112l144 144-144 144'
                  />
                </svg>
              </Link>
            </div>
            <MostRecent />
            <div className='flex justify-between items-center'>
              <h2 className='font-medium text-white text-3xl pl-5'>Drama</h2>
              <Link
                className='flex items-center font-normal text-gray-400 hover:text-white'
                href='/'
              >
                See all
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='ml-1 w-5 h-5'
                  viewBox='0 0 512 512'
                >
                  <title>Chevron Forward</title>
                  <path
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='35'
                    d='M184 112l144 144-144 144'
                  />
                </svg>
              </Link>
            </div>
            <MostRecent />
            <div className='flex justify-between items-center'>
              <h2 className='font-medium text-white text-3xl pl-5'>Suspense</h2>
              <Link
                className='flex items-center font-normal text-gray-400 hover:text-white'
                href='/'
              >
                See all
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='ml-1 w-5 h-5'
                  viewBox='0 0 512 512'
                >
                  <title>Chevron Forward</title>
                  <path
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='35'
                    d='M184 112l144 144-144 144'
                  />
                </svg>
              </Link>
            </div>
            <MostRecent />
            <div className='flex justify-between items-center'>
              <h2 className='font-medium text-white text-3xl pl-5'>For kids</h2>
              <Link
                className='flex items-center font-normal text-gray-400 hover:text-white'
                href='/'
              >
                See all
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='ml-1 w-5 h-5'
                  viewBox='0 0 512 512'
                >
                  <title>Chevron Forward</title>
                  <path
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='35'
                    d='M184 112l144 144-144 144'
                  />
                </svg>
              </Link>
            </div>
            <MostRecent />
          </main>
          <div className='ml-20'>
            <Footer />
          </div>
        </div>
      </NavLayout>
    </AppLayout>
  );
}
