import axios from 'axios';

export const key = 'd9c1c2b849268c203399df8d825103444d8985c4';

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4/',
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;
