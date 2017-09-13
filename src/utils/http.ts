import axios from 'axios';

import config from '../config';

let http = axios.create({
  baseURL: config.baseURI
});

export default http;
