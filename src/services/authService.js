import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

axios.interceptors.request.use(function(config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export const AuthService = () => {
  const urlRegister = '/api/register';
  const urlLogin = '/api/login';
  const urlLogout = 'api/logout';

  const postRegister = async (data) => {
    const res = await axios.post(urlRegister, data);
    return res;
  };
  
  const postLogin = async (data) => {
    const res = await axios.post(urlLogin, data);
    return res;
  }; 

  const postLogout = async () => {
    const res = await axios.post(urlLogout);
    return res;
  }; 

  return {
    postRegister,
    postLogin,
    postLogout
  }
}