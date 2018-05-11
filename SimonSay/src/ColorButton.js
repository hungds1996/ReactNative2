import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

class ColorButton extends Component {
    state = {};

    onPress = () => {
        this.props.onButtonPressed(this.props.id);
    };

    render() {
        return (
            <TouchableOpacity onPress={this.onPress}>
            <View
                style={{
                    width: 40,
                    height: 40,
                    backgroundColor: this.props.bgColor,
                    borderRadius: 5
                }}>
            </View>
            </TouchableOpacity>    
        );
    }
}

export default ColorButton;