import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

class GameOver extends Component {
  state = {  }
  render() {
    return (
        <Text>Game Over</Text>,
        <Button>Back</Button>
    );
  }
}

export default GameOver;