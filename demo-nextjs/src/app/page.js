'use client';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from './Header';
export default function Home() {
  const pathname = usePathname();
  const router = useRouter();

  const dashboard = () => {
    router.push('/blog');
  };

  return (
    <div>
      {Header()}
      <Header />
      <br />
      <br />
      <br />
      <br />
      <Link href='/productlist'>Go to Product List</Link>
      <br />
      <br />
      <br />
      <Link href='/product'>Go to Product Server List</Link>
      <button onClick={() => dashboard()}>Click</button>
      <br />
      <br />
      <br />
      <br />
      Home
    </div>
  );
}

function Comp() {
  return <h1>HelloJs quwd</h1>;
}
