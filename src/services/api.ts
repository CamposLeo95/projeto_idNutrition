import axios from "axios"

const api = axios.create({
    // baseURL: "http://localhost:5174"
    baseURL: "https://projeto-id-nutrition.vercel.app/"
});

export default api;