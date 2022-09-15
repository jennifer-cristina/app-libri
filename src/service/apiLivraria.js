import axios from 'axios';

export const apiLivraria = axios.create({
    baseURL: 'http://10.107.144.15:3000'
});