import { StyleSheet } from 'react-native';

export const primary = '#4F6272';
export const primaryDark = '#404E5C';
export const primaryHighlight = '#626E79';
export const textDefault = "#ffffff";
export const textHighlight = "#feeebc";


export const commonStyles = StyleSheet.create({
    wrapper : {
        flex : 1,
    },
    bgPrimary : {
        backgroundColor : primary,
    },
    textLarge : {
        fontSize : 24,
        color : textDefault,
        paddingVertical : 10,
    },
    horizontalPadding : {
        paddingHorizontal : 5,
    },
});