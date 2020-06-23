import axios from "axios";

const KEY = "AIzaSyCqF1UCtyselXUCFgpzAisLQZ1X8bq9ogQ";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
})