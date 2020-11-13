import {
  GET_TOP_ARTICLES,
  GET_SEARCH_ARTICLES,
  GET_CATEGORY_ARTICLES,
} from "../actionTypes";
import api from "../../utils/api";

const { fetchArticles } = api;

export const getTopArticles = (category) => async (dispatch, getState) => {
  const { code } = getState().country.selectedCountry;

  try {
    const { articles } = await fetchArticles(code, category);

    if (articles && articles.length) {
      dispatch({
        type: GET_TOP_ARTICLES,
        payload: articles,
      });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export const getSearchArticles = (term) => async (dispatch, getState) => {
  const { code } = getState().country.selectedCountry;

  try {
    const { articles } = await fetchArticles(code, null, term);

    if (articles && articles.length) {
      dispatch({
        type: GET_SEARCH_ARTICLES,
        payload: articles,
      });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export const getCategoryArticles = (category) => async (dispatch, getState) => {
  const { code } = getState().country.selectedCountry;

  try {
    const { articles } = await fetchArticles(code, category);

    dispatch({
      type: GET_CATEGORY_ARTICLES,
      payload: {
        category,
        response: articles,
      },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
