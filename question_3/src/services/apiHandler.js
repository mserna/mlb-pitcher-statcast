import axios from 'axios';

const BASE_URI = 'http://0.0.0.0:5000';

const client = axios.create({
 baseURL: BASE_URI,
 json: true
});

class APIClient {
  constructor() {}

  getPitchers() {
    return this.perform('get', '/pitchers');
  }

  getPitcher(id) {
    return this.perform('get', '/pitchers/details', {
      id: id
    });
  }

  async perform (method, resource, data) {
    return client({
      method,
      url: resource,
      params: data,
      timeout: 0, // no timeout
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json'
      }
    }).then(resp => {
      return resp.data ? resp.data : [];
    })
  }
}

export default APIClient;