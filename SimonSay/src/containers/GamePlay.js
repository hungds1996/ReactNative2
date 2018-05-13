import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import ColorButton from './ColorButton'
import GameOver from './GameOver'

class GamePlay extends Component {
    state = {
        colors: ["red", "green", "blue", "yellow"],
        requirement: [],
        input: [],
        isPlaying: true,
      };
      componentDidMount() {
        this._firstStart();
      }
    
        _firstStart = () =>
        this.setState({
          requirement: [Math.floor(Math.random() * 4)],
          input: []
        });

        _makeHarder = (id) => {
            id == this.state.requirement[this.state.input.length] ? 
            this._inputRefresh(id) : 
            this._gameOver()
        } 

        _onButtonPressed = (id) => {
            this.state.input.length == this.state.requirement.length - 1 ? 
            this._makeHarder(id) :
            this._inputContinue(id) 
            };
        
        _addInput = (id) => {
            this.setState({
                input: this.state.input.concat(id),
            });
        }

        _inputContinue = (id) => {
            id == this.state.requirement[this.state.input.length] ?
            this._addInput(id) :
            this._gameOver()
        }
        
      _inputRefresh = (id) => {
        this.setState(
          {
            input: [],
            requirement: this.state.requirement.concat(Math.floor(Math.random() * 4)),
          },
        );
      };

        _gameOver = () => {
            this.props.setCondition(this.state.requirement.length)
        }

      render() {
        const buttons = this.state.colors.map((color, index) => (
          <ColorButton
            key={index}
            onButtonPressed={this._onButtonPressed}
            id={index}
            bgColor={color}
          />
        ));
    
        return (
            <View style={styles.container}>
                <Text>score : {this.state.requirement.length - 1}</Text>
                <Text>requirement : {this.state.requirement}</Text>
                <Text>input : {this.state.input}</Text>
                <View style={styles.buttonContainer}>
                  {buttons}
                </View>
                
            </View>
        );
      }
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  buttonContainer: {
    width: "70%",
    height: "70%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default GamePlay ;
