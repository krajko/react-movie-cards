import React from 'react';

const Popup = ({ children, active }) => {
  let classes = ['popup', active ? 'active' : null].join(' ');

  return <div className={classes}>{children}</div>;
};

export default Popup;
