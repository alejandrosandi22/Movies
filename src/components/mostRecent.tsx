import Poster from './shared/poster';

const MOST_RECENT_MOVIES: PosterProps[] = [
  {
    id: 448,
    title: 'The Good Doctor',
    url: '/luhKkdD80qe62fwop6sdrXK9jUT.jpg',
    release_date: 'Sep 25, 2017',
  },
  {
    id: 449,
    title: 'How the Grinch Stole Christmas',
    url: '/1WZbbPApEivA421gCOluuzMMKCk.jpg',
    release_date: 'Nov 15, 2000',
  },
  {
    id: 554,
    title: 'Spider-Man: No Way Home',
    url: '/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg',
    release_date: 'Dec 15, 2021',
  },
  {
    id: 550,
    title: 'Peaky Blinders',
    url: '/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg',
    release_date: 'Sep 12, 2013',
  },
  {
    id: 552,
    title: 'The Simpsons',
    url: '/zI3E2a3WYma5w8emI35mgq5Iurx.jpg',
    release_date: 'Dec 17, 1989',
  },
  {
    id: 551,
    title: "Grey's Anatomy",
    url: '/daSFbrt8QCXV2hSwB0hqYjbj681.jpg',
    release_date: 'Mar 27, 2005',
  },
  {
    id: 553,
    title: 'Willow',
    url: '/jhdSPDlhswjN1r6O0pGP3ZvQgU8.jpg',
    release_date: 'Nov 30, 2022',
  },
  {
    id: 555,
    title: 'The Big 4',
    url: '/jrw684BhFJZ9Jac6KJda3hSQkxt.jpg',
    release_date: 'Dec 19, 2022',
  },
  {
    id: 556,
    title: 'The Last Of Us',
    url: '/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
    release_date: 'Sep 25, 2017',
  },
];

export default function MostRecent() {
  return (
    <div className='movies-bar flex gap-10 my-5 w-full overflow-x-auto p-5 pb-10'>
      {MOST_RECENT_MOVIES.map((movie) => (
        <Poster
          key={movie.id}
          id={movie.id}
          title={movie.title}
          url={movie.url}
          release_date={movie.release_date}
        />
      ))}
    </div>
  );
}
