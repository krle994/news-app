import axios from "../config/axios";

async function fetchArticles(code = "gb", category, pageSize) {
    const res = await axios.get("/top-headlines", {
        params: {
            country: code,
            category,
            pageSize,
        },
    });
    return res.data;
}

export default {
    fetchArticles,
};
