'use client';
import React from 'react';
import { users } from '../about/user/page';
import Link from 'next/link';
import '../styles.css';
import '../usersList/style.css';

const UserList = () => {
  return (
    <div>
      <h1>userList</h1>
      <ul>
        {users.map((item) => (
          <div key={item.id}>
            <Link href={`/usersList/${item.id}`}>{item.name}</Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
