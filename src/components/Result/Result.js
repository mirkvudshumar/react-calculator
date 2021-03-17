import React from 'react';

import './Result.css';

const result = (props) => (
  <form>
    <input
      type="text"
      value={
        Array.isArray(props.equation) ? props.equation.join('') : props.equation
      }
    />
  </form>
);

export default result;
