import React from 'react';
import './style.css';

export default function App() {
  const onSubmit = (e) => {
    e.preventDefault();
    const fullName = e.target.elements.fullName.value;
    alert(`Submitted: ${fullName}`);
  };

  const onChange = (e) => {
    // alert(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input name="fullName" pattern=".* .*" required onChange={onChange} />
      <button>Submit</button>
    </form>
  );
}
