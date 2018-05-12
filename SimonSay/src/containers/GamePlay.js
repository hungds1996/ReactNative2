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
            this.setState({
                isPlaying : false
            });
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

        const styles = StyleSheet.create({
            container: {
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F5FCFF"
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
    
        return (
            this.state.isPlaying ?
            (<View style={styles.container}>
                <Text>requirement : {this.state.requirement}</Text>
                <Text>input : {this.state.input}</Text>
                {buttons}
            </View>) :
            <GameOver/>

        );
      }

      
    }

export default GamePlay ;
