import axios from "axios";

const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? JSON.parse(token) : false;
};

const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

client.interceptors.request.use((config) => {
  if(getToken()){
      config.headers.Authorization = `Bearer ${getToken()}`;
  }

  return config;
});
export default client;
