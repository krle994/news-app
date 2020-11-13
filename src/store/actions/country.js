import { SET_SELECTED_COUNTRY } from "../actionTypes";

export const setSelectedCountry = ({ code, name }) => (dispatch) => {
  dispatch({
    type: SET_SELECTED_COUNTRY,
    payload: {
      code,
      name,
    },
  });
};
