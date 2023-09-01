import axios from "axios"

const mainURL = axios.create({
    // baseURL: "http://localhost:8000",
    baseURL: "https://hadya.onrender.com",
})

export default mainURL