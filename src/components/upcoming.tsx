import Image from 'next/image';
import Link from 'next/link';
import Poster from './shared/poster';

const MOST_RECENT_MOVIES: PosterProps[] = [
  {
    id: 554,
    title: 'Spider-Man: No Way Home',
    url: '/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg',
  },
  {
    id: 447,
    title: 'Spider-Man: No Way Home',
    url: '/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg',
  },
  {
    id: 448,
    title: 'The Simpsons',
    url: '/8ln5VUVk7gnNGIb2VNgw8nICDVt.jpg',
  },
  {
    id: 449,
    title: 'Medieval',
    url: '/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg',
  },
  {
    id: 555,
    title: 'The Last Of Us',
    url: '/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg',
  },
  {
    id: 556,
    title: 'The Last Of Us',
    url: '/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg',
  },
];

export default function Upcoming() {
  return (
    <div className='movies-bar flex gap-10 my-5 w-full overflow-x-auto p-5 bg-zinc-900'>
      {MOST_RECENT_MOVIES.map((movie) => (
        <Link href='/'>
          <div
            key={movie.id}
            className='relative inline-block aspect-[500/281] w-96 rounded-lg overflow-hidden'
            style={{ boxShadow: '5px 5px 5px #0d0d0f' }}
          >
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.url}`}
              alt={movie.title}
              fill
              className='object-cover hover:scale-105'
              style={{ transition: '0.5s' }}
            />
          </div>
          <h3 className='text-lg text-white font-medium'>{movie.title}</h3>
        </Link>
      ))}
    </div>
  );
}
