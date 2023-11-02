'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

const ProductList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setList((await axios.get('https://dummyjson.com/products')).data.products);
  };

  return (
    <div>
      <h1>Product list</h1>
      {list.length == 0 ? (
        <h1 style={{ alignItems: 'centre' }}>Loading...</h1>
      ) : (
        <>
          {list.map((item) => (
            <div className='product-card' key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <p>Rating: {item.rating}</p>
              <p>Stock: {item.stock}</p>
              <p>Discount: {item.discountPercentage}%</p>
              {item.images.map((img) => (
                <span key={img}>
                  <Image src={img} alt={item.title} width={200} height={200} />
                </span>
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ProductList;
