import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '80c08323e8fb461c9d3b803bcb88bb87'
    }
})