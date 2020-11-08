import { SET_COUNTRY } from "../actionTypes";

export const setSelectedCountry = ({ code, name}) => (dispatch) => {
    dispatch({
        type: SET_COUNTRY,
        payload: {
            code,
            name
        },
    });
};
