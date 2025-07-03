import React from 'react';

export default function ProfileCard({ name, email, avatarUrl }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', maxWidth: '200px' }}>
      <img src={avatarUrl} alt="Avatar" width="100" />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}
