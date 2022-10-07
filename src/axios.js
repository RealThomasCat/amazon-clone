import axios from "axios";

const instance = axios.create({
    //The API (Cloud function) URL
    baseURL: 'http://localhost:5001/challenge-789ed/us-central1/api'
});

export default instance;