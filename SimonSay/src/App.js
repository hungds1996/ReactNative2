
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import ColorButton from "./ColorButton";

// Component
// Props
// State

// Function component
const Text2 = props => (
  <View>
    <Text>
      {props.children}
      {props.username}
    </Text>
  </View>
);

// Class component
export default class App extends Component {
  state = {
    colors: ["red", "green", "blue", "yellow"],
    requirement: [],
    input: [],
    index: 0
  };

  componentDidMount() {
    this._createRandomRequirement();
  }

  _createRandomRequirement = () =>
    this.setState({
      requirement: Array.from({ length: 4 }).map(i =>
        Math.floor(Math.random() * 4)
      ),
      input: [],
      index: 0
    });
  
    _onButtonPressed = id => {
      id == this.state.requirement[this.state.index] ? this._setInput(id) : this._createRandomRequirement()
    };

  _setInput = (id) => {
    this.setState(
      {
        input: this.state.input.concat([id]),
        index: this.state.index + 1
      }
    );
  };

  render() {
    const buttons = this.state.colors.map((color, index) => (
      <ColorButton
        key={index}
        onButtonPressed={this._onButtonPressed}
        id={index}
        bgColor={color}
      />
    ));

    return (
      <View style={styles.container}>
        <Text>{this.state.requirement}</Text>
        <Text>{this.state.input}</Text>
        {buttons}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});