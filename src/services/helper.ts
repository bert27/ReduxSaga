import axios from "axios";
import * as config from "config";
axios.defaults.baseURL = config.API_BASE_URL;

export function apiCall(method, url) {
  return fetch(url, {
    method,
  }).then((response) => response.json());
}
export function apiPost(method, data, url) {
  return axios
    .post(url, data, getRequestOptions(method))
    .then(handleResponse)
    .then((token) => {
      return token;
    })
    .catch((error) => {
      alert(error);
    });
}
function getRequestOptions(method) {
  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };
}

function handleResponse(response) {
  var p = new Promise((resolve, reject) => {
    const data = response.data;
    if (response.status >= 400) {
      const error = response.statusText;
      reject(error);
    }

    resolve(data);
  });
  return p.then((data) => {
    return data;
  });
}
