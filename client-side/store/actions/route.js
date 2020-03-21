export const SET_OPTIONS = 'SET_OPTIONS';
export const TOGGLE_DATE = 'TOGGLE_DATE';

export const setOptions = optionSettings => {
    return {type: SET_OPTIONS, options: optionSettings};
};

export const toggleDate = (date) => {
    return { type: TOGGLE_DATE, date: date};
};