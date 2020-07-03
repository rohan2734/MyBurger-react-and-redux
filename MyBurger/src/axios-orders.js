import axios from 'axios';

const instance = axios.create({
  baseURL:'https://rohan-my-burger.firebaseio.com/'
})

export default instance;