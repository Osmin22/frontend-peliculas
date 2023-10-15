import axios from 'axios'

export const axiosconfiguration = axios.create({
    baseURL:process.env.REACT_APP_BASE_URL
})