import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions
} from 'react-native';

class StyleDemo extends Component {
  state = {  }
  render() {
    // const { width, height } = Dimensions.get("window");

    return (
        <View style={styles.container}>
            <View 
                style={[styles.square, {backgroundColor : "white"}]}
            />
            <View
                style={[styles.square, {backgroundColor : "grey"}]}
            />
            <View 
                style={[styles.square, {backgroundColor : "white"}]}
            />
            <View 
                style={[styles.square, {backgroundColor : "grey"}]}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        marginTop: 20,
    },
    square : {
        width : "50%", 
        height : "50%"
    }
});

export default StyleDemo;