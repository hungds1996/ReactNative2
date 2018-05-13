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
        <View style={styles.superContainer}>
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
        </View>
    );
  }
}

const styles = StyleSheet.create({
    superContainer : {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    container : {
        width: "70%",
        height: "70%",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        marginTop: 20,
    },
    square : {
        margin: "2%",
        width : "46%", 
        height : "46%"
    }
});

export default StyleDemo;