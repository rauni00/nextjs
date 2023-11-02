import Link from 'next/link';
import React from 'react';
const Page = () => {
  return (
    <div>
      <Link href='/'>Home</Link>
      <br />
      <br />
      <Link href='/about'>about</Link>
      <br />
      <br />
      Footer
    </div>
  );
};

export default Page;
