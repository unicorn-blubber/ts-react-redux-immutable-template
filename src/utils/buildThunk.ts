import Axios from 'axios';
// eslint-disable-next-line import/no-duplicates
import type { AxiosRequestConfig } from 'axios';
import type { ThunkDispatch } from 'redux-thunk';

// eslint-disable-next-line import/named
import { Action } from '../react-app-env';

interface BuildThunkArgs {
  config: AxiosRequestConfig, // most common are headers, method, baseURL, url, params and data
  start: Action,
  success: Action,
  failure: Action,
}

interface ThunkProps {
  finalConfigSpecs?: AxiosRequestConfig,
}

interface ThunkDispatchProps {
  type: string,
  payload?: any,
}

export const buildThunk = ({
  config, start, success, failure,
}: BuildThunkArgs) => ({
  finalConfigSpecs,
}: ThunkProps) => async (
  dispatch: ThunkDispatch<ThunkDispatchProps, void, any>,
) => {
  dispatch({ type: start });
  try {
    const response = await Axios.request({ ...config, ...finalConfigSpecs });
    dispatch({ type: success, payload: response.data });
  } catch (error) {
    dispatch({ type: failure, payload: error.response });
    throw error;
  }
};

export default buildThunk;
