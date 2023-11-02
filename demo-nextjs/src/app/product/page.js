import axios from 'axios';
import Image from 'next/image';
import React from 'react';
import Button from './Button';

async function getData() {
  let data = await axios.get('https://dummyjson.com/products');
  return data.data.products;
}

const Page = async () => {
  let list = await getData();
  return (
    <div>
      <h1>Product list</h1>
      <>
        {list.map((item) => (
          <div className='product-card' key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <Button price={item.price} />
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
    </div>
  );
};

export default Page;
