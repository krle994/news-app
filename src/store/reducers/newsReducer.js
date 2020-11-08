import { GET_ARTICLES } from "../actionTypes";

const initialState = {
    articles: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ARTICLES:
            return {
                ...state,
                articles: payload,
            };

        default:
            return state;
    }
};
