import Image from 'next/image';
import Link from 'next/link';

export default function Poster({ url, title, release_date }: PosterProps) {
  return (
    <Link href={url}>
      <div>
        <div className='relative aspect-[1707/2560] w-48 rounded overflow-hidden transition hover:scale-105'>
          <Image
            src={`https://image.tmdb.org/t/p/original/${url}`}
            alt={title}
            fill
          />
        </div>
        <h3 className='font-medium text-white text-lg mt-2'>{title}</h3>
        <h4 className='font-normal text-zinc-300 text-base'>{release_date}</h4>
      </div>
    </Link>
  );
}
