
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import GamePlay from './containers/GamePlay';
import StyleDemo from './containers/StyleDemo';

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
  };

  render() {

    return (
      <StyleDemo/>
    );
  }
}
