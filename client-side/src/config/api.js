const BASE_ENDPOINT = 'https://listopia-srvr.herokuapp.com/';
const apiVersion = 'api/v1/';

export default (path) => `${BASE_ENDPOINT}${apiVersion}${path}`;