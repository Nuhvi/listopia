const BASE_ENDPOINT = 'http://localhost:3000/';
const apiVersion = 'api/v1/';

export default (path) => `${BASE_ENDPOINT}${apiVersion}${path}`;