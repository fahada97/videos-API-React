import axios from "axios";

//const KEY = "AIzaSyCqF1UCtyselXUCFgpzAisLQZ1X8bq9ogQ";
const KEY = "AIzaSyCYJG0Oqj26CX0D_QD9aFFUcQ5rbmAOYaU";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
})