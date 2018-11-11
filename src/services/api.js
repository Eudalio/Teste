import axios from 'axios'

// 10.0.2.2:3000 - localhost p/ android studio
// 10.0.3.2:3000 - localhost p/ genymotion

const api = axios.create({
    baseURL: 'http://192.168.0.105:3000'
})

export default api;