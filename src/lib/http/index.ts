import axios from "axios";

const URL = process.env["REACT_APP_API_URL"];

const axiosInstance = axios.create({
  baseURL: URL,
  timeoutErrorMessage: "Request took long to complete, times up!",
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (config.headers === undefined) {
      config.headers = {};
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const postRequest = (endpoint: string, body?: any): Promise<any> => {
  return axiosInstance.post(endpoint, { ...body }, {});
};

export const putRequest = (endpoint: string, body?: any): Promise<any> => {
  return axiosInstance.put(endpoint, { ...body }, {});
};

export const getRequest = (endpoint: string, params?: any): Promise<any> => {
  return axiosInstance.get(endpoint, { params });
};

export const deleteRequest = (endpoint: string, params?: any): Promise<any> => {
  return axiosInstance.delete(endpoint, { params });
};
