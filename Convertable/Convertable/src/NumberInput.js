import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

import Picker from './Picker'

class NumberInput extends Component {
  state = { 
    ratioLeft: 1,
    ratioRight: 1,
    number: 0,
    number1: 0,
    number2: 0,
    colors : ["#5F6062", "#7B7263", "#5F6062", "#7B7263"],
    units : ["Centimeter", "Decimeter", "Meter", "Kilometer"]
   }

  _checkNumber1 = (text) => {
    this.setState({ 
      number : text,
      number1 : text,
      number2 : this._convertNumber(text, 1)
    })
  }

  _checkNumber2 = (text) => {
    this.setState({ 
      number : text,
      number1 : this._convertNumber(text, 2),
      number2 : text
    })
  }

  _convertNumber = (number, check) => {
    return number === ""
      ? 0
      // : number.slice(0, number.length - 1) + "," + number.slice(number.length - 1)
      : (check === 1 
          ? parseFloat(number) * this.state.ratioLeft / this.state.ratioRight
          : parseFloat(number) * this.state.ratioRight / this.state.ratioLeft) 
  }

  _onButtonPressedLeft = (id) => {
    this.setState({
      ratioLeft: Math.pow(10, id),
    }),
    this._checkNumber1(this.state.number)
  }

  _onButtonPressedRight = (id) => {
    this.setState({
      ratioRight: Math.pow(10, id),
    }),
    this._checkNumber2(this.state.number)
  }

  render() {
    const PickersLeft = this.state.colors.map((color, index) => (
      <Picker
        name = { this.state.units[index] }
        id = { index+1 }
        key = {index}
        color = {color}
        onButtonPressed={ this._onButtonPressedLeft }
      />
    ));

    const PickersRight = this.state.colors.map((color,index) => (
      <Picker
      name = { this.state.units[index] }
      id = { index+1 }
      key = {index}
      color = {color}
      onButtonPressed={ this._onButtonPressedRight }
    />
    ));

    return (
      <View style={styles.container}>
        <View style={styles.inputsContainer}>
          <TextInput
            keyboardType = "numeric"
            onChangeText = { (text) => this._checkNumber1(text) }
            value = { this.state.number1 === 0 ? "" : this.state.number1.toString() }
          />
          {PickersLeft}          
        </View>
        <View style={styles.pickersContainer}>
          <TextInput
            keyboardType = "numeric"
            onChangeText = { (text) => this._checkNumber2(text) }
            value = { this.state.number2 === 0 ? "" : this.state.number2.toString() }
          />
          {PickersRight}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  inputsContainer: {
    flex: 1,
    margin: 10,
    flexDirection: "column",
    flexWrap: "wrap",
  },
  pickersContainer: {
    flex: 1,
    margin: 10,
    flexDirection: "column",
    flexWrap: "wrap",
  }
})

export default NumberInput;