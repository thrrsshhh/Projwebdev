import React from 'react';

export default function Card({ children }) {
  return (
    <div style={{ border: '2px solid gray', padding: '1rem', borderRadius: '8px' }}>
      {children}
    </div>
  );
}
