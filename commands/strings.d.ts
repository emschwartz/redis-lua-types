import '../common'

type SetOption = ['EX' | 'ex', number] | ['PX' | 'px', number] | 'NX' | 'nx' | 'XX' | 'xx' | 'KEEPTTL'

declare global {
  /** @noSelf */
  namespace redis {
    // redis.call(...)

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
    export function call(method: 'SET' | 'set', key: string, val: Value): OkResult;
    /** @vararg */
    export function call(method: 'SET' | 'set', key: string, val: Value, ...options: SetOption[]): OkResult;
    /** @vararg */
    export function call(method: 'SET' | 'set', key: string, val: Value, ...options: (SetOption | 'GET' | 'get')[]): OkResult | string | null;

    // redis.pcall(...)

    // APPEND
    export function pcall(method: 'APPEND' | 'append', key: string, value: Value): Value | ErrorResult;

    // DECR
    export function pcall(method: 'DECR' | 'decr', key: string): number | ErrorResult;

    // DECRBY
    export function pcall(method: 'DECRBY' | 'decrby', key: string, value: number): number | ErrorResult;

    // GET
    export function pcall(method: 'GET' | 'get', key: string): string | null | ErrorResult;

    // INCR
    export function pcall(method: 'INCR' | 'incr', key: string): number | ErrorResult;

    // INCRBY
    export function pcall(method: 'INCRBY' | 'incrby', key: string, value: number): number | ErrorResult;

    // INCRBYFLOAT
    export function pcall(method: 'INCRBYFLOAT' | 'incrbyfloat', key: string, value: number): string | ErrorResult;

    // MGET
    /** @vararg */
    export function pcall(method: 'MGET' | 'mget', ...keys: string[]): Value[] | ErrorResult;

    // MSET
    /** @vararg */
    export function pcall(method: 'MSET' | 'mset', ...keyvalues: Value[]): Value[] | ErrorResult;

    // MSETNX
    /** @vararg */
    export function pcall(method: 'MSETNX' | 'msetnx', ...keyvalues: Value[]): 0 | 1 | ErrorResult;

    // SET
    export function pcall(method: 'SET' | 'set', key: string, val: Value): OkResult | ErrorResult;
    /** @vararg */
    export function pcall(method: 'SET' | 'set', key: string, val: Value, ...options: SetOption[]): OkResult | ErrorResult;
    /** @vararg */
    export function pcall(method: 'SET' | 'set', key: string, val: Value, ...options: (SetOption | 'GET' | 'get')[]): OkResult | string | null | ErrorResult;
  }
}
