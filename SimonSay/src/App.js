
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import GamePlay from './containers/GamePlay';
import StyleDemo from './containers/StyleDemo';
import GameOver from "./containers/GameOver";

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
    isPlaying: true,
    score: 0,
  };

  _setCondition = (score) => {
    this.setState({
      isPlaying: !this.state.isPlaying,
      score: score,
    })
  }

  render() {

    // return (
    //   <StyleDemo/>
    // );

    return (
        this.state.isPlaying ?
        <GamePlay setCondition={this._setCondition} /> :
        <GameOver setCondition={this._setCondition} finalScore={this.state.score - 1}/>
    );
  }
}
