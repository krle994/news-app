import axios from "../config/axios";

async function getTopNews(country = 'gb') {
    const res = await axios.get("/top-headlines", {
        params: {
            country,
        },
    });
    return res.data;
}

export default {
    getTopNews,
};
