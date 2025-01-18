import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Laptop', price: 1000, description: 'A powerful laptop.' },
  { id: 2, name: 'Phone', price: 500, description: 'A smart phone.' },
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetails;
