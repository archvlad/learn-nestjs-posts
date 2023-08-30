import axios from 'axios';

const API_URL = 'http://localhost:3000/auth/';

class AuthService {
  async login(username, password) {
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);
    let response = await axios.post(API_URL + 'login', params);
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + response.data.accessToken;
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem('user');
  }

  async signup(username, password) {
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);
    let response = await axios.post(API_URL + 'register', params);
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + response.data.accessToken;
    }
    return response.data;
  }
}

export default new AuthService();
