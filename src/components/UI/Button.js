import React from 'react';

const Button = ({ children, type, clicked }) => {
  return (
    <button type={type} className="my-btn" onClick={clicked}>
      {children}
    </button>
  );
};

export default Button;
