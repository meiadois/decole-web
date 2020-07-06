import axios from 'axios';


const api = axios.create({
  baseURL: 'https://api.decole.app/V1/',
});


export default api;