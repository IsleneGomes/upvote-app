// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://segware-book-api.segware.io/api'
// });

// export default api;

const api = async () => {
  const endpoint = 'http://segware-book-api.segware.io/api';
  const fetchApi = await fetch(endpoint);
  const result = await fetchApi.json();
  return result;
}

export default api;