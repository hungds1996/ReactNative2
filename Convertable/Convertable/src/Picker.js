import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';



class Picker extends Component {
  state = {  }
      
  _onPress = () => {
      this.props.onButtonPressed(this.props.id)
  };

  render() {
    
    return (
        <TouchableOpacity
            onPress={this._onPress}
        >
            <View
                style={{
                    width : 150,
                    height : 40,
                    backgroundColor: this.props.color
                }}
            >
            <Text>
                { this.props.name }
            </Text>
            </View>
        </TouchableOpacity>
    );
  }
}

export default Picker;