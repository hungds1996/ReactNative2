import unitListReducer from "./unitListReducer";
import baseValueReducer from "./baseValueReducer";
import screenReducer from "./screenReducer";
import categoriesListReducer from './categoriesListReducer'
import currentUnitIndexReducer from './currentUnitIndexReducer'

export default {
    unitList: unitListReducer,
    baseValue: baseValueReducer,
    screen: screenReducer,
    categoriesList: categoriesListReducer,
    currentUnitIndex: currentUnitIndexReducer,
};
