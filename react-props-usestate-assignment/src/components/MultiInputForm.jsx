import React, { useState } from 'react';

export default function MultiInputForm() {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <p>Name: {form.name}</p>
      <p>Email: {form.email}</p>
    </div>
  );
}
