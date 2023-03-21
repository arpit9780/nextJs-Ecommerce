import { toast } from "react-toastify";

const { default: axios } = require("axios");

const Instance = axios.create({
  baseURL: "https://ecom-vkxe.onrender.com/",
})

Instance.interceptors.request.use((config) => {
  let authToken;
  if (typeof window !== 'undefined') {
    authToken = window.JSON.parse(localStorage.getItem("authToken"))
  }
  config.headers["Authorization"] = "Bearer " + authToken?.token;
  return config;
});

Instance.interceptors.response.use(function (response) {
  return response;
}, 
function (error) {
  if (error.response.status === 401) {
    toast.error(error.response.data.error);
  }
  else if(error.response.status === 404) {
    toast.error( error.response.data.error || "Not found")
  }else if(error.response.status === 400) {
    toast.error( error.response.data.error )
  }
  return Promise.reject(error.data);
});

export default Instance;