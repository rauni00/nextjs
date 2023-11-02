'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
const User = () => {
  const route = usePathname();

  return (
    <div>
      <h4>{route}</h4>
      {users.map((item) => (
        <div key={item.id}>
          <li>{item.email}</li>
        </div>
      ))}
      About User
    </div>
  );
};
export const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    age: 25,
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    age: 35,
  },
];
export default User;
