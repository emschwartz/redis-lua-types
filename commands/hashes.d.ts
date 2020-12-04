import '../common'

declare global {
  /** @noSelf */
  namespace redis {
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
    export function call(method: 'HMSET' | 'hmset', key: string, ...fieldsvalues: Value[]): OkReply;

    // HSET
    export function call(method: 'HSET' | 'hset', key: string, field: string, value: Value): number;
  }
}
