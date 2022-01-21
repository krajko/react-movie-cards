import React from 'react';

const TextInput = ({ name, label, value, placeholder, changed, error }) => {
  return (
    <div className="text-input">
      {label ? <label htmlFor={name}>{label}</label> : null}
      <input type="text" name={name} value={value} onChange={changed} placeholder={placeholder} />
      <p className="error">{error}</p>
    </div>
  );
};

export default TextInput;
