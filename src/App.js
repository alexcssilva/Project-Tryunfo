import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

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
      cardImage: '',
      stateInput: [],
      cardRare: '',
      isSaveButtonDisabled: true,
    };
    this.OnInputChange = this.OnInputChange.bind(this);
    this.CheckedInput = this.CheckedInput.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  OnInputChange(event) {
    const { name, value, checked, type } = event.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    }, () => this.ValidateSaveButton());
  }

  ValidateSaveButton() {
    const checkedInput = this.CheckedInput();
    const checkedValueAttribute = this.CheckedValueAttribute();
    const checkedTrue = false;
    this.setState({
      isSaveButtonDisabled:
        (checkedInput || checkedValueAttribute) ? !checkedTrue : checkedTrue,
    });
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

  onSaveButtonClick(event) {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      cardRare,
    } = this.state;
    const saveInput = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      cardRare,
    };
    this.setState((currentState) => ({
      stateInput: [...currentState.stateInput, saveInput],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
    }));
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      cardImage,
      cardRare,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.OnInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardTrunfo={ cardTrunfo }
          cardImage={ cardImage }
          cardRare={ cardRare }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardTrunfo={ cardTrunfo }
          cardImage={ cardImage }
          cardRare={ cardRare }
        />
      </div>
    );
  }
}

export default App;
