import React from 'react';

const Button = ({ children, type, clicked, deleteBtn }) => {
  let classes = ['my-btn', deleteBtn ? 'delete' : null].join(' ');

  return (
    <button type={type} className={classes} onClick={clicked}>
      {children}
    </button>
  );
};

export default Button;
