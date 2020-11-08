import { SET_COUNTRY, GET_COUNTRIES } from "../actionTypes";

const initialState = {
    selectedCountry: {
        code: "GB",
        name: "Great Britain",
    },
    countries: [
        {
            code: "GB",
            name: "Great Britain",
        },
        {
            code: "US",
            name: "United States",
        },
    ]
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_COUNTRY:
            return {
                ...state,
                selectedCountry: payload,
            };

        case GET_COUNTRIES:
            return {
                ...state,
                ...payload,
            };

        default:
            return state;
    }
};
