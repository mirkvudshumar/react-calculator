import React, { Component } from 'react';

import styles from './Calculator.module.css';
import Controls from '../Controls/Controls';

class Calculator extends Component {
	render () {
		return (
			<div className={styles.calculator}>
				<Controls />
			</div>
		);
	}
}

export default Calculator;