import { CHANGE_BASE_VALUE, CHANGE_SCREEN, CHANGE_CATEGORY, CHANGE_CURRENT_UNIT_INDEX, CHANGE_CATEGORY_INDEX } from './types';

export const createChangeBaseValueAction = value => ({
    type: CHANGE_BASE_VALUE,
    payload: value,
});


export const CONVERT_SCREEN = "CONVERT_SCREEN";
export const CATEGORIES_SCREEN = "CATEGORIES_SCREEN";

export const createChangeScreenAction = screen => ({
    type: CHANGE_SCREEN,
    payload: screen
})

export const createChangeCategoryAction = categoryIndex => ({
    type: CHANGE_CATEGORY,
    payload: categoryIndex
})

export const createChangeCurrentUnitIndexAction = currentUnitIndex => ({
    type: CHANGE_CURRENT_UNIT_INDEX,
    payload: currentUnitIndex 
})

