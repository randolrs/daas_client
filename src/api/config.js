import axios from 'axios';
import qs from 'qs';

class ApiClient {
  constructor (options = {}) {
    this.api = axios.create({
      baseURL: options.apiUrl,
      timeout: 61000,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    this.api.defaults.withCredentials = true;
  }

  fetch = (url, params) => {
    return this.api.get(url).then(res => {
      return res.data;
    });
  }

  update = (url, params) => {
    return this.api.put(url + this.buildQueryString(params)).then(res => {
      return res.data;
    });
  }

  post = (url, params) => {
    return this.api.post(url + this.buildQueryString(params)).then(res => {
      return res.data;
    });
  }

  delete = (url) => {
    return this.api.delete(url).then(res => {
      return res.data;
    });
  }

  fetchAll = (url, params) => {
    return this.api.get(url).then(res => {
      const result = {
        data: res.data,
        // meta: {
        //   total,
        // }
      };

      return result;
    });
  }

  buildQueryString(params) {
    const result = qs.stringify(params, { arrayFormat: 'brackets', encodeValuesOnly: true });

    return result ? `?${result}` : '';
  }
}

const apiUrl = 'http://localhost:5000/api/v1/';

const apiClient = new ApiClient({
  apiUrl: apiUrl,
});

export default apiClient;
