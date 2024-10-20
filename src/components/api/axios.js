import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://connections-api.goit.global/'
});

export const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
}

const token = localStorage.getItem('userToken');
if (token) {
  setAuthToken(token);
}
export default axiosInstance;