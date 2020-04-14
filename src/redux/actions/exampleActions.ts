import Axios from 'axios';
// eslint-disable-next-line no-unused-vars
import type { AxiosRequestConfig } from 'axios';
// eslint-disable-next-line no-unused-vars
import type { ThunkDispatch } from 'redux-thunk';

// eslint-disable-next-line no-unused-vars
import type { Action } from '../../react-app-env';


const baseURL = 'https://example.com';


interface BuildThunkArgs {
  config: AxiosRequestConfig, // most common are headers, method, baseURL, url, params and data
  start: Action,
  success: Action,
  failure: Action,
}

interface ThunkProps {
  data?: {},
  params?: {},
}

interface ThunkDispatchProps {
  type: string,
  payload?: any,
}


const buildThunk = ({
  config, start, success, failure,
}: BuildThunkArgs) => ({
  data,
  params,
}: ThunkProps) => async (
  dispatch: ThunkDispatch<ThunkDispatchProps, void, any>,
) => {
  dispatch({ type: start });
  try {
    const response = await Axios.request({ ...config, data, params });
    dispatch({ type: success, payload: response.data });
  } catch (error) {
    dispatch({ type: failure, payload: error.response });
    throw error;
  }
};


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
