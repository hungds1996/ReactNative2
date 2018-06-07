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
import { createChangeScreenAction, createChangeCategoryAction, createChangeCurrentUnitIndexAction, CONVERT_SCREEN } from '../actions/';
import { connect } from 'react-redux';

class CategoriesScreen extends PureComponent {
  state = {
  };

  _onCategoryPressed = (index) => {
    this.props.createChangeScreenAction(CONVERT_SCREEN);
    this.props.createChangeCategoryAction(index);
  }

  _renderCategoryItem = ({ item, index }) => (
    <TouchableOpacity
      style={[
        commonStyles.horizontalPadding,
        {
          paddingVertical: 10,
          backgroundColor: index % 2 === 0 ? primary : primaryHighlight
        }
      ]}
      onPress={() => this._onCategoryPressed(index)}
    >
      <Text
        style={[
          commonStyles.textLarge
        ]}
      > 
        {item} 
      </Text>
    </TouchableOpacity>
  )

  _categoryKeyExtractor = item => item

  render() {
    
    return (
      <View>
        <FlatList
          data={this.props.categoriesList}
          renderItem={this._renderCategoryItem}
          keyExtractor={this._categoryKeyExtractor}
        />
      </View>
    );
  }
}

const mapAppStateToProps = ({ categoriesList }) => ({ categoriesList })

export default connect(mapAppStateToProps, { createChangeScreenAction, createChangeCategoryAction, createChangeCurrentUnitIndexAction })(CategoriesScreen);