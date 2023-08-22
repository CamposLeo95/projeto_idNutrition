import axios from "axios"

const api = axios.create({
    // baseURL: "http://localhost:5173"
    baseURL: "https://projeto-id-nutrition-n54z83u2m-camposleo95.vercel.app"
})

export default api