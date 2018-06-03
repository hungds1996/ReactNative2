/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { commonStyles } from './theme'
import ConvertScreen from './containers/ConvertScreen';

export default class App extends Component {
  render() {
    return (
      <View
        style={[
          commonStyles.wrapper,
          commonStyles.bgPrimary,
          {
            paddingTop : Platform.OS === "ios" ? 20 : 0,
          }
        ]}
      >
        <ConvertScreen/>
      </View>
    );
  }
}

