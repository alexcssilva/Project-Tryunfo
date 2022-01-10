import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';
import { number } from 'prop-types';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardTrunfo: '',
      
      isSaveButtonDisabled: true,
    };
    this.OnInputChange = this.OnInputChange.bind(this);
    this.CheckedInput = this.CheckedInput.bind(this);
  }

  OnInputChange(event) {
    const { name, value, checked, type } = event.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    }, () => this.validando());
  }

  validando() {
    const checkedInput = this.CheckedInput();
    const checkedValueAttribute = this.CheckedValueAttribute();
    this.setState({
      isSaveButtonDisabled: (checkedInput || checkedValueAttribute) ? true : false
    })
  }

  CheckedInput() {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    if (cardName === ''
    || cardDescription === ''
    || cardImage === ''
    || cardRare === '') {
      return true;
    } return false;
  }

  CheckedValueAttribute() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const attr1 = Number(cardAttr1);
    const attr2 = Number(cardAttr2);
    const attr3 = Number(cardAttr3);
    const sumValueAttribute = 210;
    const sumPoint = 90;
    if (attr1 + attr2 + attr3 > sumValueAttribute
      || attr1 > sumPoint
      || attr1 < 0
      || attr2 > sumPoint
      || attr2 < 0
      || attr3 > sumPoint
      || attr3 < 0) {
      return true;
    } return false;
  }

  // isSaveButtonDisabled = () => {
  //   this.setState((currentState) => {
  //     isSaveButtonDisabled: this.CheckedInput() ? true : false;
  //   });
  // }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.OnInputChange }
          isSaveButtonDisabled={ this.state.isSaveButtonDisabled }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardTrunfo={ cardTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
