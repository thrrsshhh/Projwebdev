import React from 'react';

export default function ClickLogger({ logMessage }) {
  return <button onClick={logMessage}>Log Message</button>;
}
