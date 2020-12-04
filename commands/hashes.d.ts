import '../common'

declare global {
  /** @noSelf */
  namespace redis {
    // redis.call(...)

    // HDEL
    /** @vararg */
    export function call(method: 'HDEL' | 'hdel', key: string, ...fields: string[]): number;

    // HEXISTS
    export function call(method: 'HEXISTS' | 'hexists', key: string, field: string): 0 | 1;

    // HGET
    export function call(method: 'HGET' | 'hget', key: string, field: string): string | null;

    // HGETALL
    export function call(method: 'HGETALL' | 'hgetall', key: string): string[];

    // HINCRBY
    export function call(method: 'HINCRBY' | 'hincrby', key: string, field: string, value: number): number;

    // HINCRBYFLOAT
    export function call(method: 'HINCRBYFLOAT' | 'hincrbyfloat', key: string, field: string, value: number): string;

    // HKEYS
    export function call(method: 'HKEYS' | 'hkeys', key: string): string[];

    // HLEN
    export function call(method: 'HLEN' | 'hlen', key: string): number;

    // HMGET
    /** @vararg */
    export function call(method: 'HMGET' | 'hmget', key: string, ...fields: string[]): string[];

    // HMSET
    /** @vararg */
    export function call(method: 'HMSET' | 'hmset', key: string, ...fieldsvalues: Value[]): OkResult;

    // HSET
    export function call(method: 'HSET' | 'hset', key: string, field: string, value: Value): number;

    // redis.pcall(...)

    // HDEL
    /** @vararg */
    export function pcall(method: 'HDEL' | 'hdel', key: string, ...fields: string[]): number | ErrorResult;

    // HEXISTS
    export function pcall(method: 'HEXISTS' | 'hexists', key: string, field: string): 0 | 1 | ErrorResult;

    // HGET
    export function pcall(method: 'HGET' | 'hget', key: string, field: string): string | null | ErrorResult;

    // HGETALL
    export function pcall(method: 'HGETALL' | 'hgetall', key: string): string[] | ErrorResult;

    // HINCRBY
    export function pcall(method: 'HINCRBY' | 'hincrby', key: string, field: string, value: number): number | ErrorResult;

    // HINCRBYFLOAT
    export function pcall(method: 'HINCRBYFLOAT' | 'hincrbyfloat', key: string, field: string, value: number): string | ErrorResult;

    // HKEYS
    export function pcall(method: 'HKEYS' | 'hkeys', key: string): string[] | ErrorResult;

    // HLEN
    export function pcall(method: 'HLEN' | 'hlen', key: string): number | ErrorResult;

    // HMGET
    /** @vararg */
    export function pcall(method: 'HMGET' | 'hmget', key: string, ...fields: string[]): string[] | ErrorResult;

    // HMSET
    /** @vararg */
    export function pcall(method: 'HMSET' | 'hmset', key: string, ...fieldsvalues: Value[]): OkResult | ErrorResult;

    // HSET
    export function pcall(method: 'HSET' | 'hset', key: string, field: string, value: Value): number | ErrorResult;
  }
}
