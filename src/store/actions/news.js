import { GET_ARTICLES } from "../actionTypes";
import api from '../../utils/api';

const { fetchArticles } = api;

export const getArticles = () => async (dispatch, getState) => {
    const code = getState().country.selectedCountry.code;

    try {
        const response = await fetchArticles(code);

        if (response.articles && response.articles.length) {
            dispatch({
                type: GET_ARTICLES,
                payload: response.articles,
            });
        }
    } catch (error) {
        console.log(error);
    }
};
