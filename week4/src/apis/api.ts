import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      //  token을 헤더에 직접 설정
      config.headers.token = accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
