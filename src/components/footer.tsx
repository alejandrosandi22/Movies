import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='p-4 rounded-lg shadow md:px-16 md:py-10 bg-zinc-900'>
      <div className='sm:flex sm:items-center sm:justify-between'>
        <Link href='/' className='flex items-center mb-4 sm:mb-0'>
          <img src='/logo.svg' className='mr-3 h-8' alt='streaming' />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            Streaming
          </span>
        </Link>
        <ul className='flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400'>
          <li>
            <Link href='#' className='mr-4 hover:underline md:mr-6 '>
              Home
            </Link>
          </li>
          <li>
            <Link href='#' className='mr-4 hover:underline md:mr-6'>
              Movies
            </Link>
          </li>
          <li>
            <Link href='#' className='mr-4 hover:underline md:mr-6 '>
              Series
            </Link>
          </li>
          <li>
            <Link href='#' className='hover:underline'>
              Search
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
