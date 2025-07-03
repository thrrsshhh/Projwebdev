import React, { useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const theme = {
    backgroundColor: dark ? '#333' : '#fff',
    color: dark ? '#fff' : '#000',
    padding: '1rem'
  };

  return (
    <div style={theme}>
      <p>{dark ? 'Dark' : 'Light'} Mode</p>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}
