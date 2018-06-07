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

import { commonStyles } from './theme';
import ConvertScreen from './containers/ConvertScreen';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/';

import ScreenWrapper from './containers/ScreenWrapper';

const appReducer = combineReducers(reducers);
const store = createStore(appReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ScreenWrapper/>
      </Provider>
    );
  }
}

