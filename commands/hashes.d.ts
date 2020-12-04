import '../common'

declare global {
  /** @noSelf */
  namespace redis {
    // redis.call(...)

    /**
    * HDEL
    * See [HDEL](https://redis.io/commands/HDEL)
    * @vararg
    */
    export function call(method: 'HDEL' | 'hdel', key: string, ...fields: string[]): number;

    /**
    * HEXISTS
    * See [HEXISTS](https://redis.io/commands/HEXISTS)
    */
    export function call(method: 'HEXISTS' | 'hexists', key: string, field: string): 0 | 1;

    /**
    * HGET
    * See [HGET](https://redis.io/commands/HGET)
    */
    export function call(method: 'HGET' | 'hget', key: string, field: string): string | null;

    /**
    * HGETALL
    * See [HGETALL](https://redis.io/commands/HGETALL)
    */
    export function call(method: 'HGETALL' | 'hgetall', key: string): string[];

    /**
    * HINCRBY
    * See [HINCRBY](https://redis.io/commands/HINCRBY)
    */
    export function call(method: 'HINCRBY' | 'hincrby', key: string, field: string, value: number): number;

    /**
    * HINCRBYFLOAT
    * See [HINCRBYFLOAT](https://redis.io/commands/HINCRBYFLOAT)
    */
    export function call(method: 'HINCRBYFLOAT' | 'hincrbyfloat', key: string, field: string, value: number): string;

    /**
    * HKEYS
    * See [HKEYS](https://redis.io/commands/HKEYS)
    */
    export function call(method: 'HKEYS' | 'hkeys', key: string): string[];

    /**
    * HLEN
    * See [HLEN](https://redis.io/commands/HLEN)
    */
    export function call(method: 'HLEN' | 'hlen', key: string): number;

    /**
    * HMGET
    * See [HMGET](https://redis.io/commands/HMGET)
    * @vararg
    */
    export function call(method: 'HMGET' | 'hmget', key: string, ...fields: string[]): string[];

    /**
    * HMSET
    * See [HMSET](https://redis.io/commands/HMSET)
    * @vararg
    */
    export function call(method: 'HMSET' | 'hmset', key: string, ...fieldsvalues: Value[]): OkResult;

    /**
    * HSET
    * See [HSET](https://redis.io/commands/HSET)
    */
    export function call(method: 'HSET' | 'hset', key: string, field: string, value: Value): number;

    // redis.pcall(...)

    /**
    * HDEL
    * See [HDEL](https://redis.io/commands/HDEL)
    */
    /** @vararg */
    export function pcall(method: 'HDEL' | 'hdel', key: string, ...fields: string[]): number | ErrorResult;

    /**
    * HEXISTS
    * See [HEXISTS](https://redis.io/commands/HEXISTS)
    */
    export function pcall(method: 'HEXISTS' | 'hexists', key: string, field: string): 0 | 1 | ErrorResult;

    /**
    * HGET
    * See [HGET](https://redis.io/commands/HGET)
    */
    export function pcall(method: 'HGET' | 'hget', key: string, field: string): string | null | ErrorResult;

    /**
    * HGETALL
    * See [HGETALL](https://redis.io/commands/HGETALL)
    */
    export function pcall(method: 'HGETALL' | 'hgetall', key: string): string[] | ErrorResult;

    /**
    * HINCRBY
    * See [HINCRBY](https://redis.io/commands/HINCRBY)
    */
    export function pcall(method: 'HINCRBY' | 'hincrby', key: string, field: string, value: number): number | ErrorResult;

    /**
    * HINCRBYFLOAT
    * See [HINCRBYFLOAT](https://redis.io/commands/HINCRBYFLOAT)
    */
    export function pcall(method: 'HINCRBYFLOAT' | 'hincrbyfloat', key: string, field: string, value: number): string | ErrorResult;

    /**
    * HKEYS
    * See [HKEYS](https://redis.io/commands/HKEYS)
    */
    export function pcall(method: 'HKEYS' | 'hkeys', key: string): string[] | ErrorResult;

    /**
    * HLEN
    * See [HLEN](https://redis.io/commands/HLEN)
    */
    export function pcall(method: 'HLEN' | 'hlen', key: string): number | ErrorResult;

    /**
    * HMGET
    * See [HMGET](https://redis.io/commands/HMGET)
    */
    /** @vararg */
    export function pcall(method: 'HMGET' | 'hmget', key: string, ...fields: string[]): string[] | ErrorResult;

    /**
    * HMSET
    * See [HMSET](https://redis.io/commands/HMSET)
    * @vararg
    */
    export function pcall(method: 'HMSET' | 'hmset', key: string, ...fieldsvalues: Value[]): OkResult | ErrorResult;

    /**
    * HSET
    * See [HSET](https://redis.io/commands/HSET)
    * @vararg
    */
    export function pcall(method: 'HSET' | 'hset', key: string, field: string, value: Value): number | ErrorResult;
  }
}
