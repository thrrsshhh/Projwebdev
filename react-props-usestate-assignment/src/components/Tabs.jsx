import React, { useState } from 'react';

export default function Tabs() {
  const [tab, setTab] = useState('Home');

  return (
    <div>
      <div>
        <button onClick={() => setTab('Home')}>Home</button>
        <button onClick={() => setTab('About')}>About</button>
        <button onClick={() => setTab('Contact')}>Contact</button>
      </div>
      <div style={{ marginTop: '1rem' }}>
        {tab === 'Home' && <p>Welcome to Home</p>}
        {tab === 'About' && <p>About us</p>}
        {tab === 'Contact' && <p>Contact Info</p>}
      </div>
    </div>
  );
}
