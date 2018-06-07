import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';

import ConvertScreen from './ConvertScreen';
import CategoriesScreen from './CategoriesScreen';

import { CONVERT_SCREEN } from '../actions/';
import { primary, commonStyles } from '../theme';

class ScreenWrapper extends Component {
  state = {}
  render() {
    return (
      <View
        style={[
          commonStyles.wrapper,
          commonStyles.bgPrimary,
          {
            paddingTop: Platform.OS === "ios" ? 20 : 0
          }
        ]}
      >
        {
          this.props.screen === CONVERT_SCREEN
            ? <ConvertScreen/>
            : <CategoriesScreen/>
        }
      </View>
    );
  }
}

const mapAppStateToProps = ({ screen }) => ({ screen });

export default connect(mapAppStateToProps)(ScreenWrapper);