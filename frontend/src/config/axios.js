import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

let user = JSON.parse(localStorage.getItem('user'));

if (user) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.accessToken;
}
