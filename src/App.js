import React, { Component } from 'react';

import './App.css';

import Buttons   from './components/Buttons/Buttons';
import Result from './components/Result/Result'

class App extends Component {
  state = {
    equationArr: [],
  };

  onButtonPress = (event) => {
    let equation = this.state.equationArr;
    switch (event.target.value) {
      case 'AC':
        equation = [];
        break;
      case '=':
        // It is a simple app, so no danger of using eval
        const result = eval(equation.join(''));
        equation = [];
        equation.push(result);
        break;
      case 'C':
          equation.pop();
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
          equation.push(event.target.value);
        break;
    }
    this.setState({ equationArr: equation });
  };

  render() {
    return (
      <div className="calculator">
        <Result equation={this.state.equationArr} />
        <Buttons onButtonPress={this.onButtonPress} />
      </div>
    );
  }
}

export default App;
