import {Colors} from "../Colors";
export const themes = {
    light: {
        background: Colors.white,
        color: Colors.black,
        buttonBackground: Colors.darkGray,
        buttonColor: Colors.white,
        wrapperBackground: Colors.white,
    },
    dark: {
        background: Colors.darkGray,
        color: Colors.white,
        buttonBackground: Colors.lightGray,
        buttonColor: Colors.black,
        wrapperBackground: Colors.black,
    }
};
export enum themeOptions {
    LIGHT = 'light',
    DARK = 'dark',
}
