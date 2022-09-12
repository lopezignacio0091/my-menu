import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:8080",
});

api.interceptors.response.use(
  (response) => {
    if (response.status === 204) {
      return response;
    }

    // cubre el caso de un download de un archivo
    if (response.status === 200 && response.request.responseType === 'blob') {
      return response;
    }
    return response;
  },
  (error) => {
    if (!error.status && !error.response) {
      window.location.reload();
    }
    if (error.response) {
      if (error.response.status !== 401) {
        return error.response;
      }
    }
    // se agrega el atributo para saber que es un error de saga
    // eslint-disable-next-line
    error.httpError = true;

    throw error;
  },
);

export default api;