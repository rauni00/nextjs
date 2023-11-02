'use client';
import { users } from '@/app/about/user/page';
import { useParams } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import img from '../../Img/back-button.png';
import Image from 'next/image';

const User = () => {
  const params = useParams();
  const user = users.find((item) => item.id == params.users);
  return (
    <div>
      <Link href='/usersList'>
        <Image
          className='back-btn'
          src={img}
          alt='Picture of the author'
          width={20}
        />
      </Link>
      <div>
        Users
        <ul>
          <li>
            <span className='bold-text'>Name :</span> {user.name}
          </li>
          <li>
            <span className='bold-text'>email :</span>
            {user.email}
          </li>
          <li>
            <span className='bold-text'> age :</span> {user.age}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default User;
