import {
    themeChangedStart, themeChanged,
    themeChangedFailed
} from "./themeSlice";

export const changeTheme = (dispatch, theme) => {
    dispatch(themeChangedStart());
    try {
        dispatch(themeChanged(theme));
    } catch (error) {
        dispatch(themeChangedFailed(error));
    }
}