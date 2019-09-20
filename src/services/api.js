import axios from 'axios';

const api = axios.create({
   baseURL: 'https://tindevapiv1.herokuapp.com'
});

export default api;