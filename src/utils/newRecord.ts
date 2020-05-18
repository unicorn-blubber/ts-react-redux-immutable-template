import { Record } from 'immutable';

// eslint-disable-next-line no-unused-vars
import { ReadonlyRecord } from '../react-app-env';

export const newRecord = <T>(obj: T) => Record(obj)() as ReadonlyRecord<T>;

export default {};
