import axios from 'axios';
import qs from 'qs';

const api = axios.create({
  baseURL: 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce',
  paramsSerializer: params => {
    return qs.stringify(params, { arrayFormat: 'repeat' });
  },
});

export default api;
