import React from 'react';

import './Button.css';

const Button = (props) => {
  const classes = ['button'];
  if (props.buttonStyle) {
    classes.push(props.buttonStyle);
  }

  return (
    <div className={classes.join(' ')}>
      <button type="button" onClick={props.clicked} value={props.value}>
        {props.value}
      </button>
    </div>
  );
};

export default Button;
