import React from 'react';

import './Button.css';

const Button = (props) => {
  const classes = [];
  if (props.buttonStyle) {
    classes.push(props.buttonStyle);
  }

  return (
    <button
      className={classes.join(' ')}
      type="button"
      onClick={props.clicked}
      value={props.value}
    >
      {props.value}
    </button>
  );
};

export default Button;
