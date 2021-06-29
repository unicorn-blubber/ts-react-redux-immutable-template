import { buildThunk } from '../../utils';


const baseURL = 'https://example.com';


const axiosAuthConfig = {
  headers: {
    Authorization: localStorage.getItem('token'),
  },
};

const axiosExampleLoginURLConfig = {
  baseURL,
  url: '/login',
};

const axiosExampleEndpointWithAuth = {
  ...axiosAuthConfig,
  baseURL,
  url: '/example',
};


export const postLogin = buildThunk({
  config: {
    ...axiosExampleLoginURLConfig,
    method: 'POST',
  },
  start: 'POST_LOGIN_START',
  success: 'POST_LOGIN_SUCCESS',
  failure: 'POST_LOGIN_FAILURE',
});

export const getExampleData = buildThunk({
  config: {
    ...axiosExampleEndpointWithAuth,
    method: 'GET',
  },
  start: 'GET_DATA_WITH_AUTH_START',
  success: 'GET_DATA_WITH_AUTH_SUCCESS',
  failure: 'GET_DATA_WITH_AUTH_FAILURE',
});
export const postExampleData = buildThunk({
  config: {
    ...axiosExampleEndpointWithAuth,
    method: 'POST',
  },
  start: 'POST_DATA_WITH_AUTH_START',
  success: 'POST_DATA_WITH_AUTH_SUCCESS',
  failure: 'POST_DATA_WITH_AUTH_FAILURE',
});
export const putExampleData = buildThunk({
  config: {
    ...axiosExampleEndpointWithAuth,
    method: 'PUT',
  },
  start: 'PUT_DATA_WITH_AUTH_START',
  success: 'PUT_DATA_WITH_AUTH_SUCCESS',
  failure: 'PUT_DATA_WITH_AUTH_FAILURE',
});
export const deleteExampleData = buildThunk({
  config: {
    ...axiosExampleEndpointWithAuth,
    method: 'DELETE',
  },
  start: 'DELETE_DATA_WITH_AUTH_START',
  success: 'DELETE_DATA_WITH_AUTH_SUCCESS',
  failure: 'DELETE_DATA_WITH_AUTH_FAILURE',
});

export const exampleFunction = (examplePayload: any) => ({
  type: 'EXAMPLE_TYPE',
  payload: examplePayload,
});
