import axios from "axios";

const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

client.interceptors.request.use(config => {
    console.log(config.data);

    return config;
})
export default client;
