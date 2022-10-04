import axios from "axios";

const instance = axios.create({
    baseURL: '...' //The API (Cloud function) URl
});

export default instance;