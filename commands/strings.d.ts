import '../common'

type SetOption = ['EX' | 'ex', number] | ['PX' | 'px', number] | 'NX' | 'nx' | 'XX' | 'xx' | 'KEEPTTL'

declare global {
  /** @noSelf */
  namespace redis {
    // redis.call(...)

    /**
    * APPEND
    * See [APPEND](https://redis.io/commands/APPEND)
    */
    export function call(method: 'APPEND' | 'append', key: string, value: Value): Value;

    /**
    * DECR
    * See [DECR](https://redis.io/commands/DECR)
    */
    export function call(method: 'DECR' | 'decr', key: string): number;

    /**
    * DECRBY
    * See [DECRBY](https://redis.io/commands/DECRBY)
    */
    export function call(method: 'DECRBY' | 'decrby', key: string, value: number): number;

    /**
    * GET
    * See [GET](https://redis.io/commands/GET)
    */
    export function call(method: 'GET' | 'get', key: string): string | null;

    /**
    * INCR
    * See [INCR](https://redis.io/commands/INCR)
    */
    export function call(method: 'INCR' | 'incr', key: string): number;

    /**
    * INCRBY
    * See [INCRBY](https://redis.io/commands/INCRBY)
    */
    export function call(method: 'INCRBY' | 'incrby', key: string, value: number): number;

    /**
    * INCRBYFLOAT
    * See [INCRBYFLOAT](https://redis.io/commands/INCRBYFLOAT)
    */
    export function call(method: 'INCRBYFLOAT' | 'incrbyfloat', key: string, value: number): string;

    /**
    * MGET
    * See [MGET](https://redis.io/commands/MGET)
    * @vararg
    */
    export function call(method: 'MGET' | 'mget', ...keys: string[]): Value[];

    /**
    * MSET
    * See [MSET](https://redis.io/commands/MSET)
    * @vararg
    */
    export function call(method: 'MSET' | 'mset', ...keyvalues: Value[]): Value[];

    /**
    * MSETNX
    * See [MSETNX](https://redis.io/commands/MSETNX)
    * @vararg
    */
    export function call(method: 'MSETNX' | 'msetnx', ...keyvalues: Value[]): 0 | 1;

    /**
    * SET
    * See [SET](https://redis.io/commands/SET)
    */
    export function call(method: 'SET' | 'set', key: string, val: Value): OkResult;
    /**
    * SET
    * See [SET](https://redis.io/commands/SET)
    * @vararg
    */
    export function call(method: 'SET' | 'set', key: string, val: Value, ...options: SetOption[]): OkResult;
    /**
    * SET
    * See [SET](https://redis.io/commands/SET)
    * @vararg
    */
    export function call(method: 'SET' | 'set', key: string, val: Value, ...options: (SetOption | 'GET' | 'get')[]): OkResult | string | null;

    // redis.pcall(...)

    /**
    * APPEND
    * See [APPEND](https://redis.io/commands/APPEND)
    */
    export function pcall(method: 'APPEND' | 'append', key: string, value: Value): Value | ErrorResult;

    /**
    * DECR
    * See [DECR](https://redis.io/commands/DECR)
    */
    export function pcall(method: 'DECR' | 'decr', key: string): number | ErrorResult;

    /**
    * DECRBY
    * See [DECRBY](https://redis.io/commands/DECRBY)
    */
    export function pcall(method: 'DECRBY' | 'decrby', key: string, value: number): number | ErrorResult;

    /**
    * GET
    * See [GET](https://redis.io/commands/GET)
    */
    export function pcall(method: 'GET' | 'get', key: string): string | null | ErrorResult;

    /**
    * INCR
    * See [INCR](https://redis.io/commands/INCR)
    */
    export function pcall(method: 'INCR' | 'incr', key: string): number | ErrorResult;

    /**
    * INCRBY
    * See [INCRBY](https://redis.io/commands/INCRBY)
    */
    export function pcall(method: 'INCRBY' | 'incrby', key: string, value: number): number | ErrorResult;

    /**
    * INCRBYFLOAT
    * See [INCRBYFLOAT](https://redis.io/commands/INCRBYFLOAT)
    */
    export function pcall(method: 'INCRBYFLOAT' | 'incrbyfloat', key: string, value: number): string | ErrorResult;

    /**
    * MGET
    * See [MGET](https://redis.io/commands/MGET)
    * @vararg
    */
    export function pcall(method: 'MGET' | 'mget', ...keys: string[]): Value[] | ErrorResult;

    /**
    * MSET
    * See [MSET](https://redis.io/commands/MSET)
    * @vararg
    */
    export function pcall(method: 'MSET' | 'mset', ...keyvalues: Value[]): Value[] | ErrorResult;

    /**
    * MSETNX
    * See [MSETNX](https://redis.io/commands/MSETNX)
    * @vararg
    */
    export function pcall(method: 'MSETNX' | 'msetnx', ...keyvalues: Value[]): 0 | 1 | ErrorResult;

    /**
    * SET
    * See [SET](https://redis.io/commands/SET)
    */
    export function pcall(method: 'SET' | 'set', key: string, val: Value): OkResult | ErrorResult;
    /**
    * SET
    * See [SET](https://redis.io/commands/SET)
    * @vararg
    */
    export function pcall(method: 'SET' | 'set', key: string, val: Value, ...options: SetOption[]): OkResult | ErrorResult;
    /**
    * SET
    * See [SET](https://redis.io/commands/SET)
    * @vararg
    */
    export function pcall(method: 'SET' | 'set', key: string, val: Value, ...options: (SetOption | 'GET' | 'get')[]): OkResult | string | null | ErrorResult;
  }
}
