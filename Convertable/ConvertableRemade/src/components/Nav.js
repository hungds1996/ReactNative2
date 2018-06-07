import React, {
    Component
  } from 'react';
  import {
    StyleSheet,
    Text,
    View,
    Button,
    Platform,
    TouchableOpacity
  } from 'react-native';
  import { connect } from 'react-redux';
  import { primary, commonStyles } from '../theme';
  
  class Nav extends Component {
    state = {}
    render() {
      return (
        <View 
          style={{
            backgroundColor: 'white',
            alignItems: 'flex-end'
          }}
        >
          <TouchableOpacity
            onPress={this.props._onChangeScreenButtonPressed}
          >
            <Text
              style={{
                fontSize: 24,
                color: primary,
                paddingVertical: 5,
                paddingRight: 5
              }}
            >
              Categories
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  
  export default Nav;