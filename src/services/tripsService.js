import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

axios.interceptors.request.use(function(config){
  const token = Cookies.get('authTokens');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
})


export const TripsService = () => {
  const urlGetAll = '/api/destinations';


  const getTrips = async () => {
    const res = await axios.get(urlGetAll);
    return res;
  };
  
  

  return {
    getTrips
  }
}