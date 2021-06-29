/* eslint-disable no-use-before-define */
import {
  List,
  Map,
  Record,
  Set,
  Stack,
} from 'immutable';

export type SafeListType<T extends ImmutableType> = List<T>
export type SafeMapType<K extends ImmutableType, V extends ImmutableType> = Map<K, V>
export type SafeRecordType<T extends SafeObject> = Record<T>
export type SafeSetType<T extends ImmutableType> = Set<T>
export type SafeStackType<T extends ImmutableType> = Stack<T>

export type ImmutableType = (
  string
  | boolean
  | number
  | SafeListType<any>
  | SafeMapType<any, any>
  | SafeRecordType<any>
  | SafeSetType<any>
  | SafeStackType<any> // you can also add OrderedMap and all of the other datatypes that ImmutableJS uses 
)

export type SafeObject = {
  [key: string]: ImmutableType,
}

type SafeListArg = ImmutableType // incomplete 
type SafeMapArg = SafeObject // incomplete 
type SafeStackArg = ImmutableType // incomplete 

export const SafeList = <T extends SafeListArg>(arg: T[]) => (List(arg));
export const SafeMap = <
    K, V extends ImmutableType, U extends SafeMapArg
  >(arg: U) => (Map<K, V>(arg as any));
export const SafeRecord = <
    T extends SafeObject
  >(defaultValues: T, name?: 'string') => (Record(defaultValues, name));
export const SafeSet = <T extends ImmutableType>(arg: T[]) => (Set(arg));
export const SafeStack = <T extends SafeStackArg>(arg: T[]) => (Stack(arg));
