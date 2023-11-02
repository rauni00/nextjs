import Link from 'next/link';
import React from 'react';
const Page = () => {
  return (
    <div>
      <Link href='/about/user'>About User</Link>
      <br />
      <br />
      <Link href='/'>Home</Link>
      <br />
      <br />
      <Link href='/footer'>footer</Link>
      <br />
      <br />
      about
    </div>
  );
};

export default Page;
