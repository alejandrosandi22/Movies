import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = () => setToggle(!toggle);

  return (
    <header
      className='z-40 fixed top-0 left-0 flex flex-col justify-between py-10 h-full bg-zinc-900 overflow-hidden border-r border-zinc-700'
      style={{ width: toggle ? '12rem' : '4rem', transition: 'width 0.2s' }}
    >
      <Link
        href='/'
        className='flex items-center py-2 px-4 text-base font-normal rounded-lg text-white'
      >
        <img
          className='h-8 w-8 drop-shadow-2xl'
          src='/logo.svg'
          alt='Movies Logo'
        />
        {toggle && <span className='ml-3 font-medium text-lg'>Streaming</span>}
      </Link>
      <nav className='w-full'>
        <ul className='space-y-2 px-1'>
          <li>
            <Link
              href='/'
              className='flex py-2 px-4 text-base font-normal rounded-lg text-white hover:bg-zinc-700'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 stroke-white'
                viewBox='0 0 512 512'
              >
                <title>Home</title>
                <path
                  d='M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='24'
                />
                <path
                  d='M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='24'
                />
              </svg>
              {toggle && <span className='ml-3'>Home</span>}
            </Link>
          </li>
          <li>
            <Link
              href='/'
              className='flex items-center py-2 px-4 text-base font-normal rounded-lg text-white hover:bg-zinc-700'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 stroke-white'
                viewBox='0 0 512 512'
              >
                <title>Videocam</title>
                <path
                  d='M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='32'
                />
                <path
                  d='M268 384H84a52.15 52.15 0 01-52-52V180a52.15 52.15 0 0152-52h184.48A51.68 51.68 0 01320 179.52V332a52.15 52.15 0 01-52 52z'
                  fill='none'
                  strokeMiterlimit='10'
                  strokeWidth='32'
                />
              </svg>
              {toggle && <span className='ml-3'>Movies</span>}
            </Link>
          </li>
          <li>
            <Link
              href='/'
              className='flex items-center py-2 px-4 text-base font-normal rounded-lg text-white hover:bg-zinc-700'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 stroke-white'
                viewBox='0 0 512 512'
              >
                <title>Tv</title>
                <rect
                  x='32'
                  y='96'
                  width='448'
                  height='272'
                  rx='32.14'
                  ry='32.14'
                  fill='none'
                  stroke='currentColor'
                  strokeLinejoin='round'
                  strokeWidth='32'
                />
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeMiterlimit='10'
                  strokeWidth='32'
                  d='M128 416h256'
                />
              </svg>
              {toggle && <span className='ml-3'>Series</span>}
            </Link>
          </li>
          <li>
            <Link
              href='/'
              className='flex items-center py-2 px-4 text-base font-normal rounded-lg text-white hover:bg-zinc-700'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 stroke-white'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
              {toggle && <span className='ml-3'>Search</span>}
            </Link>
          </li>
        </ul>
      </nav>
      <div className='w-full px-1 flex justify-center'>
        <button
          onClick={handleToggle}
          className='flex items-center py-2 px-4 text-base font-normal rounded-lg text-white hover:bg-zinc-700'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6 stroke-white transition-transform'
            style={{ transform: toggle ? 'rotateY(180deg)' : 'rotateY(0)' }}
            fill='none'
            viewBox='0 0 512 512'
          >
            <path
              d='M112 112L256 256L112 400'
              strokeWidth='24'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M256 112L400 256L256 400'
              strokeWidth='24'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
