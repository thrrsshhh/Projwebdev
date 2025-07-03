import React from 'react';

export default function ProductsList({ items }) {
  return (
    <div>
      {items.map(p => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
}
