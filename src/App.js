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
        if (Array.isArray(equation)) {
          try {
            equation = eval(this.state.equationArr.join(''));
          } catch (error) {
            alert('error');
          } finally {
            equation = eval(this.state.equationArr.join(''));
          }
        }
        break;
      case 'C':
        if (Array.isArray(equation) && equation.length > 0) {
          equation.pop();
        }
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
        if (Array.isArray(equation)) {
          equation.push(event.target.value);
        }
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
