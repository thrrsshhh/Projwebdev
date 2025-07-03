import React, { useState } from 'react';

export default function Product({ product }) {
  const [added, setAdded] = useState(false);

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={() => setAdded(true)}>
        {added ? 'Added to Cart!' : 'Add to Cart'}
      </button>
    </div>
  );
}
