'use client';
import Link from 'next/link';
import React from 'react';
import './styles.css';
import { usePathname } from 'next/navigation';
const Header = () => {
  const path = usePathname();
  return (
    <header>
      {path !== '/footer' && (
        <h1 className='logo-text'>Mobile App Landing Page</h1>
      )}
      <nav>
        <ul>
          <li>
            <Link href='/usersList'>All Users</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/footer'>Footer</Link>
          </li>
          {/* <li>Contact</li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
