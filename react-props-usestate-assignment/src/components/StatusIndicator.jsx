import React from 'react';

export default function StatusIndicator({ isOnline }) {
  const color = isOnline ? 'green' : 'red';
  return <div style={{
    width: '20px', height: '20px',
    borderRadius: '50%',
    backgroundColor: color
  }}></div>;
}
