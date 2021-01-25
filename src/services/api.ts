import axios from "axios";

const api = axios.create({
  baseURL: "https://api.docfacil.me/v1",
});

api.interceptors.request.use(
  async (config) => {
    const url = await config?.url?.endsWith("login");
    const tokenUser = sessionStorage.getItem("@App:access_token");
    // const refreshToken = sessionStorage.getItem("@App:refresh_token");

    if (!url && tokenUser) {
      // const userTokenExpiration = new Date(await AsyncStorage.getItem('userTokenExpiration'));
      // const today = new Date();
      // if (today > userTokenExpiration) {
      // refresh the token here
      // const userRefreshToken = await AsyncStorage.getItem('userRefreshToken');
      // } else {
      config.headers.Authorization = `Bearer ${tokenUser}`;
      config.headers.Accept = "application/json";
      config.headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };
      // }
    }

    return config;
  },
  (error) => {
    // I cand handle a request with errors here
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  (error) => {
    // You can even test for a response code
    // and try a new request before rejecting the promise
    if (error.response.status === 401) {
      const requestConfig = error.config;
      return axios(requestConfig);
    }
    return Promise.reject(error);
  }
);

export default api;
