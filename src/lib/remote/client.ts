import axios from "axios";

const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000"
});

export default client;
