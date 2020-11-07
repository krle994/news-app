import axios from "axios";

export default axios.create({
    baseURL: "http://newsapi.org/v2/",
    headers: {
        "X-Api-Key": "192c06dde4e445bb9d84ba25d8c9169d",
    },
});
