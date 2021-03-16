import React, { Component } from 'react';

import './App.css';

import Button from './components/UI/Button/Button';
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
    let keys = ['AC', 'C', 'M', '+', 9, 8, 7, '-', 6, 5, 4, '*', 3, 2, 1, '/', '.', 0, '='];
    keys = keys.map((el) => (
      <Button
        key={el}
        value={el}
        clicked={(event) => this.onButtonPress(event)}
      />
    ));

    return (
      <div className="calculator">
        <Result equation={this.state.equationArr} />
        <ul>{keys}</ul>
      </div>
    );
  }
}

export default App;
