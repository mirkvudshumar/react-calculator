import React from 'react';

import Button from '../UI/Button/Button';

const Buttons = (props) => {
  let keys = ['AC', 'C', 'M', '+', 9, 8, 7, '-', 6, 5, 4, '*', 3, 2, 1, '/', '.', 0, '='];
  keys = keys.map((key) => {
    // Determine how button will look
    let buttonStyle = null;
    const operations = ['*', '-', '+', '/'];
    if (operations.includes(key)) {
      buttonStyle = 'buttonOperation';
    } else if (key === '=') {
      buttonStyle = 'buttonEqual';
    }
    return (
      <Button
        key={key}
        value={key}
        buttonStyle={buttonStyle}
        clicked={(event) => props.onButtonPress(event)}
      />
    );
  });
  return <div className="buttons">{keys}</div>;
};

export default Buttons;
