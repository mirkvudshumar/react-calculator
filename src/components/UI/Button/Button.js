import React from 'react';	

import styles from './Button.module.css';

const Button = (props) => {
	let customStyle = [];
	if(props.value === '+' || props.value === '-' || props.value === '*' || props.value === '/') {
		customStyle.push(styles.buttonOperation)
	}
	else if (props.value === '=') {
		customStyle.push(styles.buttonRed);
	}
	return (
		<li style={props.value === '=' ? {'width': '44%'} : {width: "20%"} }>
			<button className={customStyle.join('')} type="button" onClick={props.clicked} value={props.value}>{props.value}</button>
		</li>
	);
}

export default Button;