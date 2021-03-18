import React, { Component } from 'react';

import './App.css';
import Buttons from './components/Buttons/Buttons';
import Result from './components/Result/Result';

class App extends Component {
  state = {
    equationArr: [],
    memory: null,
  };

  calculateEquation = () => {
    let equation = this.state.equationArr;
    // It is a simple app, so no danger of using eval
    try {
      const result = eval(equation.join(''));
      equation = result.toString().split('');
      this.setState({ equationArr: equation });
    } catch (error) {
      alert('Error');
    }
  };

  deleteOne = () => {
    let equation = this.state.equationArr;
    equation.pop();
    this.setState({ equationArr: equation });
  };

  deleteAll = () => {
    let equation = this.state.equationArr;
    equation = [];
    this.setState({ equationArr: equation });
  };

  addNumbersAndOperators = (event) => {
    let equation = this.state.equationArr;
    equation.push(event.target.value);
    this.setState({ equationArr: equation });
  };

  memorizeEquation = () => {
    if (!this.state.memory) {
      const memory = this.state.equationArr;
      this.setState({ equationArr: [], memory: memory });
    } else if (this.state.memory) {
      const equation = this.state.equationArr.concat(this.state.memory);
      this.setState({ equationArr: equation, memory: null });
    }
  };

  onButtonPress = (event) => {
    switch (event.target.value) {
      case '=':
        this.calculateEquation();
        break;
      case 'C':
        this.deleteOne();
        break;
      case 'AC':
        this.deleteAll();
        break;
      case 'M':
        this.memorizeEquation();
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '+':
      case '-':
      case '*':
      case '/':
      case '.':
        this.addNumbersAndOperators(event);
        break;
    }
  };

  // Enable keyboard input
  onInputChange = (event) => {
    const equation = event.target.value.toString().split('');
    const isKey = new RegExp('^[0-9.+/*-]+$');
    if (event.target.value.match(isKey) || equation.length === 0) {
      this.setState({ equationArr: equation });
    }
  };

  render() {
    return (
      <div className="calculator">
        <Result
          equation={this.state.equationArr}
          onInputChange={this.onInputChange}
          calculateEquation={this.calculateEquation}
        />
        <Buttons
          onButtonPress={this.onButtonPress}
        />
      </div>
    );
  }
}

export default App;
