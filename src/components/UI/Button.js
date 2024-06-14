import React from 'react';
import './Button.css';

const Button = ({ type, onClick, children}) => {
  //console.log(Button);
  return (
    <button type={type} className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
