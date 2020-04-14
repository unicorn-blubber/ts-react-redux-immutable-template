import { Record } from 'immutable';

// eslint-disable-next-line no-unused-vars
import type { Action } from '../../react-app-env';

interface ExampleReducerStateInterface {
  exampleVariable: string,
  data: any,
  sendingLogin: boolean,
  errorLoggingIn: boolean,
  loadingTabs: boolean,
  errorLoadingTabs: boolean,
  sendingTabData: boolean,
  errorSendingTab: boolean,
  deletingTab: boolean,
  errorDeletingTab: boolean,
}

export interface ExampleReducerState extends Record<ExampleReducerStateInterface>,
  Readonly<ExampleReducerStateInterface> {}

const initialState: ExampleReducerState = Record<ExampleReducerStateInterface>({
  exampleVariable: 'Example',
  data: undefined,
  sendingLogin: false,
  errorLoggingIn: false,
  loadingTabs: false,
  errorLoadingTabs: false,
  sendingTabData: false,
  errorSendingTab: false,
  deletingTab: false,
  errorDeletingTab: false,
})();


interface ActionProps {
  type: Action,
  payload?: any,
}

export const reducer = (state = initialState, { type, payload }: ActionProps) => {
  switch (type) {
    case 'POST_LOGIN_START':
      return state.merge({
        sendingLogin: true,
        errorLoggingIn: false,
      });
    case 'POST_LOGIN_SUCCESS':
      localStorage.setItem('token', payload);
      return state.merge({
        sendingLogin: false,
        errorLoggingIn: false,
      });
    case 'POST_LOGIN_FAILURE':
      return state.merge({
        sendingLogin: false,
        errorLoggingIn: true,
      });
    case 'GET_DATA_WITH_AUTH_START':
      return state.merge({
        loadingTabs: true,
        errorLoadingTabs: false,
      });
    case 'GET_DATA_WITH_AUTH_SUCCESS':
      return state.merge({
        loadingTabs: false,
        errorLoadingTabs: false,
        data: payload,
      });
    case 'GET_DATA_WITH_AUTH_FAILURE':
      return state.merge({
        loadingTabs: false,
        errorLoadingTabs: true,
      });
    case 'POST_DATA_WITH_AUTH_START':
      return state.merge({
        sendingTabData: true,
        errorSendingTab: false,
      });
    case 'POST_DATA_WITH_AUTH_SUCCESS':
      return state.merge({
        sendingTabData: false,
        errorSendingTab: false,
        data: payload, // tranform this to be immutable as deep as possible, you will have to also cast this in the files that use it
      });
    case 'POST_DATA_WITH_AUTH_FAILURE':
      return state.merge({
        sendingTabData: false,
        errorSendingTab: true,
      });
    case 'PUT_DATA_WITH_AUTH_START':
      return state.merge({
        sendingTabData: true,
        errorSendingTab: false,
      });
    case 'PUT_DATA_WITH_AUTH_SUCCESS':
      return state.merge({
        sendingTabData: false,
        errorSendingTab: false,
        data: payload, // tranform this to be immutable as deep as possible, you will have to also cast this in the files that use it
      });
    case 'PUT_DATA_WITH_AUTH_FAILURE':
      return state.merge({
        sendingTabData: false,
        errorSendingTab: true,
      });
    case 'DELETE_DATA_WITH_AUTH_START':
      return state.merge({
        deletingTab: true,
        errorDeletingTab: false,
      });
    case 'DELETE_DATA_WITH_AUTH_SUCCESS':
      return state.merge({
        deletingTab: false,
        errorDeletingTab: false,
        data: payload, // tranform this to be immutable as deep as possible, you will have to also cast this in the files that use it
      });
    case 'DELETE_DATA_WITH_AUTH_FAILURE':
      return state.merge({
        deletingTab: false,
        errorDeletingTab: true,
      });
    case 'EXAMPLE_TYPE':
      return state.merge({ exampleVariable: payload });
    default:
      if (state === initialState) return state;
      throw new Error(`${type} is not a valid type`);
  }
};

export default reducer;
