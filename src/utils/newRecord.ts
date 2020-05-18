import { Record } from 'immutable';

// eslint-disable-next-line no-unused-vars
import { ReadonlyRecord } from '../react-app-env';

export const newRecord = <T>(defaults: T) => Record(defaults)() as ReadonlyRecord<T>;

export default {};
