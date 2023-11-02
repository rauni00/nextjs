'use client';
import React from 'react';
// ! to get all routes after /study/anything called segment

const Lecture = ({ params }) => {
  return (
    <div>
      Lecture
      {params.lecture.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

export default Lecture;
