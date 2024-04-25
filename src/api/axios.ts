import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://662aa18dd3f63c12f4583be5.mockapi.io/api/pt',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default axiosInstance;