import '../common'

type UpdateElementsOptions = 'NX' | 'nx' | 'XX' | 'xx';
type UpdateElementsScoreOptions = 'GT' | 'gt' | 'LT' | 'lt';
type AddOptions = UpdateElementsOptions | UpdateElementsScoreOptions | 'CH' | 'ch';

declare global {
  /** @noSelf */
  namespace redis {
    // redis.call(...)

    /**
    * ZADD
    *
    * See [ZADD](https://redis.io/commands/ZADD)
    */
    export function call(method: 'ZADD' | 'zadd', key: string, score: number, member: Value): number;
    /**
    * ZADD
    *
    * See [ZADD](https://redis.io/commands/ZADD)
    * @vararg
    */
    export function call(method: 'ZADD' | 'zadd', key: string, ...scoresAndMembers: Value[]): number;
    /**
    * ZADD
    *
    * See [ZADD](https://redis.io/commands/ZADD)
    * @vararg
    */
    export function call(method: 'ZADD' | 'zadd', key: string, ...optionsScoresAndMembers: (AddOptions | Value)[]): number;
    /**
    * ZADD
    *
    * See [ZADD](https://redis.io/commands/ZADD)
    * @vararg
    */
    export function call(method: 'ZADD' | 'zadd', key: string, ...optionsScoresAndMembers: (AddOptions | Value | 'INCR' | 'incr')[]): string;

    /**
    * ZCARD
    *
    * See [ZCARD](https://redis.io/commands/ZCARD)
    */
    export function call(method: 'ZCARD' | 'zcard', key: string): number;

    /**
    * ZCOUNT
    *
    * See [ZCOUNT](https://redis.io/commands/ZCOUNT)
    */
    export function call(method: 'ZCOUNT' | 'zcount', key: string, min: number, max: number): number;

    /**
    * ZDIFF
    *
    * See [ZDIFF](https://redis.io/commands/ZDIFF)
    * @vararg
    */
    export function call(method: 'ZDIFF' | 'zdiff', numkeys: number, ...keys: string[]): string[];
    /**
    * ZDIFF
    *
    * See [ZDIFF](https://redis.io/commands/ZDIFF)
    * @vararg
    */
    export function call(method: 'ZDIFF' | 'zdiff', numkeys: number, ...keys: (string | 'WITHSCORES' | 'withscores')[]): string[];

    /**
    * ZDIFFSTORE
    *
    * See [ZDIFFSTORE](https://redis.io/commands/ZDIFFSTORE)
    */
    export function call(method: 'ZDIFFSTORE' | 'zdiffstore', destination: string, numkeys: number, ...keys: string[]): number;

    /**
    * ZINCRBY
    *
    * See [ZINCRBY](https://redis.io/commands/ZINCRBY)
    */
    export function call(method: 'ZINCRBY' | 'zincrby', key: string, increment: number, member: string): string;

    /**
    * ZPOPMAX
    *
    * See [ZPOPMAX](https://redis.io/commands/ZPOPMAX)
    */
    export function call(method: 'ZPOPMAX' | 'zpopmax', key: string, count?: number): string[];

    /**
    * ZPOPMIN
    *
    * See [ZPOPMIN](https://redis.io/commands/ZPOPMIN)
    */
    export function call(method: 'ZPOPMIN' | 'zpopmin', key: string, count?: number): string[];

    /**
    * ZRANGE
    *
    * See [ZRANGE](https://redis.io/commands/ZRANGE)
    */
    export function call(method: 'ZRANGE' | 'zrange', key: string, start: number, stop: number, withScores?: 'WITHSCORES' | 'withscores'): string[];

    /**
    * ZRANGEBYSCORE
    *
    * See [ZRANGEBYSCORE](https://redis.io/commands/ZRANGEBYSCORE)
    */
    export function call(method: 'ZRANGEBYSCORE' | 'zrangebyscore', key: string, min: number, max: number, withScores?: 'WITHSCORES' | 'withscores'): string[];
    /**
    * ZRANGEBYSCORE
    *
    * See [ZRANGEBYSCORE](https://redis.io/commands/ZRANGEBYSCORE)
    */
    export function call(method: 'ZRANGEBYSCORE' | 'zrangebyscore', key: string, min: number, max: number, limit: 'LIMIT' | 'limit', offset: number, count: number): string[];
    /**
    * ZRANGEBYSCORE
    *
    * See [ZRANGEBYSCORE](https://redis.io/commands/ZRANGEBYSCORE)
    */
    export function call(method: 'ZRANGEBYSCORE' | 'zrangebyscore', key: string, min: number, max: number, withScores: 'WITHSCORES' | 'withscores', limit: 'LIMIT' | 'limit', offset: number, count: number): string[];

    /**
    * ZREM
    *
    * See [ZREM](https://redis.io/commands/ZREM)
    */
    export function call(method: 'ZREM' | 'zrem', key: string, ...members: string[]): number;

    /**
    * ZSCAN
    *
    * See [ZSCAN](https://redis.io/commands/ZSCAN)
    */
    export function call(method: 'ZSCAN' | 'zscan', key: string, cursor: number, match?: string, count?: number): [number, string[]];

    /**
    * ZSCORE
    *
    * See [ZSCORE](https://redis.io/commands/ZSCORE)
    */
    export function call(method: 'ZSCORE' | 'zscore', key: string, member: string): string | null;

    // redis.pcall(...)

    /**
    * ZADD
    *
    * See [ZADD](https://redis.io/commands/ZADD)
    */
    export function pcall(method: 'ZADD' | 'zadd', key: string, score: number, member: Value): number | ErrorResult;
    /**
    * ZADD
    *
    * See [ZADD](https://redis.io/commands/ZADD)
    * @vararg
    */
    export function pcall(method: 'ZADD' | 'zadd', key: string, ...scoresAndMembers: Value[]): number | ErrorResult;
    /**
    * ZADD
    *
    * See [ZADD](https://redis.io/commands/ZADD)
    * @vararg
    */
    export function pcall(method: 'ZADD' | 'zadd', key: string, ...optionsScoresAndMembers: (AddOptions | Value)[]): number | ErrorResult;
    /**
    * ZADD
    *
    * See [ZADD](https://redis.io/commands/ZADD)
    * @vararg
    */
    export function pcall(method: 'ZADD' | 'zadd', key: string, ...optionsScoresAndMembers: (AddOptions | Value | 'INCR' | 'incr')[]): string | ErrorResult;

    /**
    * ZCARD
    *
    * See [ZCARD](https://redis.io/commands/ZCARD)
    */
    export function pcall(method: 'ZCARD' | 'zcard', key: string): number | ErrorResult;

    /**
    * ZCOUNT
    *
    * See [ZCOUNT](https://redis.io/commands/ZCOUNT)
    */
    export function pcall(method: 'ZCOUNT' | 'zcount', key: string, min: number, max: number): number | ErrorResult;

    /**
    * ZDIFF
    *
    * See [ZDIFF](https://redis.io/commands/ZDIFF)
    * @vararg
    */
    export function pcall(method: 'ZDIFF' | 'zdiff', numkeys: number, ...keys: string[]): string[] | ErrorResult;
    /**
    * ZDIFF
    *
    * See [ZDIFF](https://redis.io/commands/ZDIFF)
    * @vararg
    */
    export function pcall(method: 'ZDIFF' | 'zdiff', numkeys: number, ...keys: (string | 'WITHSCORES' | 'withscores')[]): string[] | ErrorResult;

    /**
    * ZDIFFSTORE
    *
    * See [ZDIFFSTORE](https://redis.io/commands/ZDIFFSTORE)
    */
    export function pcall(method: 'ZDIFFSTORE' | 'zdiffstore', destination: string, numkeys: number, ...keys: string[]): number | ErrorResult;

    /**
    * ZINCRBY
    *
    * See [ZINCRBY](https://redis.io/commands/ZINCRBY)
    */
    export function pcall(method: 'ZINCRBY' | 'zincrby', key: string, increment: number, member: string): string | ErrorResult;

    /**
    * ZPOPMAX
    *
    * See [ZPOPMAX](https://redis.io/commands/ZPOPMAX)
    */
    export function pcall(method: 'ZPOPMAX' | 'zpopmax', key: string, count?: number): string[] | ErrorResult;

    /**
    * ZPOPMIN
    *
    * See [ZPOPMIN](https://redis.io/commands/ZPOPMIN)
    */
    export function pcall(method: 'ZPOPMIN' | 'zpopmin', key: string, count?: number): string[] | ErrorResult;

    /**
    * ZRANGE
    *
    * See [ZRANGE](https://redis.io/commands/ZRANGE)
    */
    export function pcall(method: 'ZRANGE' | 'zrange', key: string, start: number, stop: number, withScores?: 'WITHSCORES' | 'withscores'): string[] | ErrorResult;

    /**
    * ZRANGEBYSCORE
    *
    * See [ZRANGEBYSCORE](https://redis.io/commands/ZRANGEBYSCORE)
    */
    export function pcall(method: 'ZRANGEBYSCORE' | 'zrangebyscore', key: string, min: number, max: number, withScores?: 'WITHSCORES' | 'withscores'): string[] | ErrorResult;
    /**
    * ZRANGEBYSCORE
    *
    * See [ZRANGEBYSCORE](https://redis.io/commands/ZRANGEBYSCORE)
    */
    export function pcall(method: 'ZRANGEBYSCORE' | 'zrangebyscore', key: string, min: number, max: number, limit: 'LIMIT' | 'limit', offset: number, count: number): string[] | ErrorResult;
    /**
    * ZRANGEBYSCORE
    *
    * See [ZRANGEBYSCORE](https://redis.io/commands/ZRANGEBYSCORE)
    */
    export function pcall(method: 'ZRANGEBYSCORE' | 'zrangebyscore', key: string, min: number, max: number, withScores: 'WITHSCORES' | 'withscores', limit: 'LIMIT' | 'limit', offset: number, count: number): string[] | ErrorResult;

    /**
    * ZREM
    *
    * See [ZREM](https://redis.io/commands/ZREM)
    */
    export function pcall(method: 'ZREM' | 'zrem', key: string, ...members: string[]): number | ErrorResult;

    /**
    * ZSCAN
    *
    * See [ZSCAN](https://redis.io/commands/ZSCAN)
    */
    export function pcall(method: 'ZSCAN' | 'zscan', key: string, cursor: number, match?: string, count?: number): [number, string[]] | ErrorResult;

    /**
    * ZSCORE
    *
    * See [ZSCORE](https://redis.io/commands/ZSCORE)
    */
    export function pcall(method: 'ZSCORE' | 'zscore', key: string, member: string): string | null | ErrorResult;
  }
}
