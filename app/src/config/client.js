import axios from 'axios';

const token = localStorage.getItem('id_token');
axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
const groupIndex = localStorage.getItem('groupIndex');
axios.defaults.headers['X-Group-Index'] = groupIndex || 0;

// define names routes
const namesAPI = 'http://localhost:3001';
const names = {
  index: () => axios.get(`${namesAPI}/`),
  create: (data) => axios.post(`${namesAPI}/`, data),
  themes: {
    index: () => axios.get(`${namesAPI}/themes/`),
    create: (data) => axios.post(`${namesAPI}/themes/`, data),
  },
};

const client = {
  names,
};

export default client;
