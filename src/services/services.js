import axios from 'axios';

const backURL = process.env.BACK_URL || "http://localhost:3001/sistema";
const api = axios.create({baseURL: backURL});

export default api;