import axios from "axios";

export default axios.create({
    baseURL: "http://newsapi.org/v2/",
    headers: {
        "X-Api-Key": "8f1f1e8a26594f4eb8028245829b5172",
    },
});
