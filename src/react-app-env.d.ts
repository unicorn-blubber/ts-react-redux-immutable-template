/// <reference types="react-scripts" />

// eslint-disable-next-line no-unused-vars
import type { Record } from 'immutable';

export type Action =
'POST_LOGIN_START'
| 'POST_LOGIN_SUCCESS'
| 'POST_LOGIN_FAILURE'
| 'GET_DATA_WITH_AUTH_START'
| 'GET_DATA_WITH_AUTH_SUCCESS'
| 'POST_DATA_WITH_AUTH_START'
| 'POST_DATA_WITH_AUTH_SUCCESS'
| 'GET_DATA_WITH_AUTH_FAILURE'
| 'POST_DATA_WITH_AUTH_FAILURE'
| 'PUT_DATA_WITH_AUTH_START'
| 'PUT_DATA_WITH_AUTH_SUCCESS'
| 'PUT_DATA_WITH_AUTH_FAILURE'
| 'DELETE_DATA_WITH_AUTH_START'
| 'DELETE_DATA_WITH_AUTH_SUCCESS'
| 'DELETE_DATA_WITH_AUTH_FAILURE'
| 'EXAMPLE_TYPE'

export type ReadonlyRecord<T> = Record<T> & Readonly<T>
