import Nav from 'components/shared/nav';

export default function NavLayout({ children }: NavLayout) {
  return (
    <div className='bg-zinc-900 overflow-hidden'>
      <Nav />
      <div>{children}</div>
    </div>
  );
}
