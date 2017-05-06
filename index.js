const request = require('request-promise');
const debug   = require('debug')('kong-admin-client');

const Kong = function kong(baseUrl, apiKey) {
  this.config = { baseUrl, apiKey };
  return this;
};

Kong.prototype.get = function getRequest(path) {
  return this.request('GET', path);
};

Kong.prototype.post = function postRequest(path, body) {
  return this.request('POST', path, body);
};

Kong.prototype.delete = function deleteRequest(path) {
  return this.request('DELETE', path);
};

Kong.prototype.put = function putRequest(path, body) {
  return this.request('PUT', path, body);
};

Kong.prototype.patch = function patchRequest(path, partialBody) {
  return this.request('PATCH', path, partialBody);
};

Kong.prototype.request = function buildRequest(method, path, body) {
  const options = {
    method,
    uri: this.config.baseUrl + path,
    json: true,
  };

  if (this.config.apiKey) {
    options.headers = {
      apikey: this.config.apiKey,
    };
  }

  if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
    options.body = body;
  }

  debug(`[${method}] ${path}`, body);

  return request(options);
};

module.exports = Kong;
