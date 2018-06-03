import React, { PureComponent } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity
} from "react-native";
import {
  commonStyles,
  textDefault,
  primary,
  primaryHighlight,
  textHighlight
} from "../theme";
import UnitInput from "./UnitInput";

import data from "../data.json";
import Big from 'big.js'

class UnitColumn extends PureComponent {
  state = {
    units: data.categories[0].units,
    currentUnitIndex: 0
  };

  _onUnitItemPressed = index => this.setState({ currentUnitIndex: index });

  _renderUnitItem = ({ item, index }) => (
    <TouchableOpacity
      style={[
        commonStyles.horizontalPadding,
        {
          paddingVertical: 10,
          backgroundColor: index % 2 === 0 ? primary : primaryHighlight
        }
      ]}
      onPress={() => this._onUnitItemPressed(index)}
    >
      <Text
        style={{
          color:
            index === this.state.currentUnitIndex ? textHighlight : textDefault
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  _unitKeyExtractor = item => item.id.toString();

  render() {
    return (
      <View style={commonStyles.wrapper}>
        <UnitInput
          unit={this.state.units[this.state.currentUnitIndex]}
          baseValue={this.props.baseValue}
          onChangeBaseValue={this.props.onChangeBaseValue}
        />

        <FlatList
          data={this.state.units}
          extraData={this.state.currentUnitIndex}
          renderItem={this._renderUnitItem}
          keyExtractor={this._unitKeyExtractor}
        />
      </View>
    );
  }
}

export default UnitColumn;