import {
  GET_TOP_ARTICLES,
  GET_SEARCH_ARTICLES,
  GET_CATEGORY_ARTICLES,
} from '../actionTypes';

const initialState = {
  topArticles: [],
  seatchArticles: [],
  categoryArticles: {
    business: [],
    entertainment: [],
    general: [],
    health: [],
    science: [],
    sports: [],
    technology: [],
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case GET_TOP_ARTICLES:
    return {
      ...state,
      topArticles: payload,
    };

  case GET_SEARCH_ARTICLES:
    return {
      ...state,
      searchArticles: payload,
    };

  case GET_CATEGORY_ARTICLES:
    return {
      ...state,
      categoryArticles: {
        ...state.categoryArticles,
        [payload.category]: payload.response,
      },
    };

  default:
    return state;
  }
};
