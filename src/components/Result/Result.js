import React from 'react';

import styles from './Result.module.css'
const result = (props) => {
		return (
			<form>
				<input type="text" value={Array.isArray(props.equation) ? props.equation.join('') : props.equation}>
				</input>
			</form>
		);
}

export default result;