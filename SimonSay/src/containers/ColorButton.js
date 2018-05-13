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
            <TouchableOpacity onPress={this.onPress} style={{ margin: "2%", width : "46%", height : "46%" }}>
            <View
                style={{
                    backgroundColor: this.props.bgColor,
                    borderRadius: 5,
                    flex:1,
                }}>
            </View>
            </TouchableOpacity>    
        );
    }
}

export default ColorButton;