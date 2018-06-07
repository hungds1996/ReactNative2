import data from '../data.json';
import { CHANGE_CATEGORY } from '../actions/types';

export default (state = data.categories[0].units, action) => action.type === CHANGE_CATEGORY 
                    ? data.categories[action.payload].units 
                    : state;