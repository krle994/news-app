import axios from "../config/axios";

async function fetchArticles(code = 'gb') {
    const res = await axios.get("/top-headlines", {
        params: {
            country: code,
        },
    });
    return res.data;
}

export default {
    fetchArticles,
};
