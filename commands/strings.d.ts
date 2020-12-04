import '../common'

type SetOption = ['EX' | 'ex', number] | ['PX' | 'px', number] | 'NX' | 'nx' | 'XX' | 'xx' | 'KEEPTTL'

declare global {
  /** @noSelf */
  namespace redis {
    // APPEND
    export function call(method: 'APPEND' | 'append', key: string, value: Value): Value;

    // DECR
    export function call(method: 'DECR' | 'decr', key: string): number;

    // DECRBY
    export function call(method: 'DECRBY' | 'decrby', key: string, value: number): number;

    // GET
    export function call(method: 'GET' | 'get', key: string): string | null;

    // INCR
    export function call(method: 'INCR' | 'incr', key: string): number;

    // INCRBY
    export function call(method: 'INCRBY' | 'incrby', key: string, value: number): number;

    // INCRBYFLOAT
    export function call(method: 'INCRBYFLOAT' | 'incrbyfloat', key: string, value: number): string;

    // MGET
    /** @vararg */
    export function call(method: 'MGET' | 'mget', ...keys: string[]): Value[];

    // MSET
    /** @vararg */
    export function call(method: 'MSET' | 'mset', ...keyvalues: Value[]): Value[];

    // MSETNX
    /** @vararg */
    export function call(method: 'MSETNX' | 'msetnx', ...keyvalues: Value[]): 0 | 1;

    // SET
    export function call(method: 'SET' | 'set', key: string, val: Value): OkReply;
    /** @vararg */
    export function call(method: 'SET' | 'set', key: string, val: Value, ...options: SetOption[]): OkReply;
    /** @vararg */
    export function call(method: 'SET' | 'set', key: string, val: Value, ...options: (SetOption | 'GET' | 'get')[]): OkReply | string | null;
  }
}
