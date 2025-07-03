import React, { useState } from 'react';

const questions = [
  'What is React?',
  'What is JSX?',
  'What is useState?'
];

export default function Quiz() {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <p>{questions[index]}</p>
      <button onClick={() => setIndex(index > 0 ? index - 1 : 0)}>Previous</button>
      <button onClick={() => setIndex(index < questions.length - 1 ? index + 1 : index)}>Next</button>
    </div>
  );
}
