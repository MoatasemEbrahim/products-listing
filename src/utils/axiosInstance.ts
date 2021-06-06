import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/carry1stdeveloper/mock-product-api/productBundles',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default instance;