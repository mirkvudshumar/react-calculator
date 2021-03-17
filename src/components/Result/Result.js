import React from 'react';

import './Result.css';

const result = (props) => {
  const calculateWithEnterKey = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      props.calculateEquation();
    }
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input
        type="text"
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        value={props.equation.join('')}
        onChange={(event) => props.onInputChange(event)}
        onKeyDown={(event) => calculateWithEnterKey(event)}
      />
    </form>
  );
};

export default result;
