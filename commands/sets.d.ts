import '../common'

declare global {
  /** @noSelf */
  namespace redis {
    // redis.call(...)

    /**
    * SADD
    *
    * See [SADD](https://redis.io/commands/SADD)
    * @vararg
    */
    export function call(method: 'SADD' | 'sadd', key: string, ...members: Value[]): number;

    /**
    * SCARD
    *
    * See [SCARD](https://redis.io/commands/SCARD)
    */
    export function call(method: 'SCARD' | 'scard', key: string): number;

    /**
    * SDIFF
    *
    * See [SDIFF](https://redis.io/commands/SDIFF)
    * @vararg
    */
    export function call(method: 'SDIFF' | 'sdiff', ...keys: string[]): string[];

    /**
    * SDIFFSTORE
    *
    * See [SDIFFSTORE](https://redis.io/commands/SDIFFSTORE)
    * @vararg
    */
    export function call(method: 'SDIFFSTORE' | 'sdiffstore', destination: string, ...keys: string[]): number;

    /**
    * SINTER
    *
    * See [SINTER](https://redis.io/commands/SINTER)
    * @vararg
    */
    export function call(method: 'SINTER' | 'sinter', ...keys: string[]): string[];

    /**
    * SINTERSTORE
    *
    * See [SINTERSTORE](https://redis.io/commands/SINTERSTORE)
    * @vararg
    */
    export function call(method: 'SINTERSTORE' | 'sinterstore', destination: string, ...keys: string[]): number;

    /**
    * SISMEMBER
    *
    * See [SISMEMBER](https://redis.io/commands/SISMEMBER)
    */
    export function call(method: 'SISMEMBER' | 'sismember', key: string, member: Value): 0 | 1;

    /**
    * SMEMBERS
    *
    * See [SMEMBERS](https://redis.io/commands/SMEMBERS)
    */
    export function call(method: 'SMEMBERS' | 'smembers', key: string): string[];

    /**
    * SMISMEMBER
    *
    * See [SMISMEMBER](https://redis.io/commands/SMISMEMBER)
    * @vararg
    */
    export function call(method: 'SMISMEMBER' | 'smismember', key: string, ...members: Value[]): (0 | 1)[];

    /**
    * SMOVE
    *
    * See [SMOVE](https://redis.io/commands/SMOVE)
    */
    export function call(method: 'SMOVE' | 'smove', source: string, destination: string, member: Value): 0 | 1;

    /**
    * SPOP
    *
    * See [SPOP](https://redis.io/commands/SPOP)
    */
    export function call(method: 'SPOP' | 'spop', key: string): string | null;
    /**
    * SPOP
    *
    * See [SPOP](https://redis.io/commands/SPOP)
    */
    export function call(method: 'SPOP' | 'spop', key: string, count: number): string[] | null;

    /**
    * SRANDMEMBER
    *
    * See [SRANDMEMBER](https://redis.io/commands/SRANDMEMBER)
    */
    export function call(method: 'SRANDMEMBER' | 'srandmember', key: string): string | null;
    /**
    * SRANDMEMBER
    *
    * See [SRANDMEMBER](https://redis.io/commands/SRANDMEMBER)
    */
    export function call(method: 'SRANDMEMBER' | 'srandmember', key: string, count: number): string[] | null;

    /**
    * SREM
    *
    * See [SREM](https://redis.io/commands/SREM)
    * @vararg
    */
    export function call(method: 'SREM' | 'srem', key: string, ...members: string[]): number;

    /**
    * SSCAN
    *
    * See [SSCAN](https://redis.io/commands/SSCAN)
    */
    export function call(method: 'SSCAN' | 'sscan', key: string, cursor: number, match?: string): [number, string[]];

    /**
    * SUNION
    *
    * See [SUNION](https://redis.io/commands/SUNION)
    * @vararg
    */
    export function call(method: 'SUNION' | 'sunion', ...keys: string[]): string[];

    /**
    * SUNIONSTORE
    *
    * See [SUNIONSTORE](https://redis.io/commands/SUNIONSTORE)
    * @vararg
    */
    export function call(method: 'SUNIONSTORE' | 'sunionstore', destination: string, ...keys: string[]): number;

    // redis.pcall(...)

    /**
    * SADD
    *
    * See [SADD](https://redis.io/commands/SADD)
    * @vararg
    */
    export function pcall(method: 'SADD' | 'sadd', key: string, ...members: Value[]): number | ErrorResult;

    /**
    * SCARD
    *
    * See [SCARD](https://redis.io/commands/SCARD)
    */
    export function pcall(method: 'SCARD' | 'scard', key: string): number | ErrorResult;

    /**
    * SDIFF
    *
    * See [SDIFF](https://redis.io/commands/SDIFF)
    * @vararg
    */
    export function pcall(method: 'SDIFF' | 'sdiff', ...keys: string[]): string[] | ErrorResult;

    /**
    * SDIFFSTORE
    *
    * See [SDIFFSTORE](https://redis.io/commands/SDIFFSTORE)
    * @vararg
    */
    export function pcall(method: 'SDIFFSTORE' | 'sdiffstore', destination: string, ...keys: string[]): number | ErrorResult;

    /**
    * SINTER
    *
    * See [SINTER](https://redis.io/commands/SINTER)
    */
    export function pcall(method: 'SINTER' | 'sinter', ...keys: string[]): string[] | ErrorResult;

    /**
    * SINTERSTORE
    *
    * See [SINTERSTORE](https://redis.io/commands/SINTERSTORE)
    * @vararg
    */
    export function pcall(method: 'SINTERSTORE' | 'sinterstore', destination: string, ...keys: string[]): number | ErrorResult;

    /**
    * SISMEMBER
    *
    * See [SISMEMBER](https://redis.io/commands/SISMEMBER)
    */
    export function pcall(method: 'SISMEMBER' | 'sismember', key: string, member: Value): 0 | 1 | ErrorResult;

    /**
    * SMEMBERS
    *
    * See [SMEMBERS](https://redis.io/commands/SMEMBERS)
    */
    export function pcall(method: 'SMEMBERS' | 'smembers', key: string): string[] | ErrorResult;

    /**
    * SMISMEMBER
    *
    * See [SMISMEMBER](https://redis.io/commands/SMISMEMBER)
    * @vararg
    */
    export function pcall(method: 'SMISMEMBER' | 'smismember', key: string, ...members: Value[]): (0 | 1)[] | ErrorResult;

    /**
    * SMOVE
    *
    * See [SMOVE](https://redis.io/commands/SMOVE)
    */
    export function pcall(method: 'SMOVE' | 'smove', source: string, destination: string, member: Value): 0 | 1 | ErrorResult;

    /**
    * SPOP
    *
    * See [SPOP](https://redis.io/commands/SPOP)
    */
    export function pcall(method: 'SPOP' | 'spop', key: string): string | null | ErrorResult;
    /**
    * SPOP
    *
    * See [SPOP](https://redis.io/commands/SPOP)
    */
    export function pcall(method: 'SPOP' | 'spop', key: string, count: number): string[] | null | ErrorResult;

    /**
    * SRANDMEMBER
    *
    * See [SRANDMEMBER](https://redis.io/commands/SRANDMEMBER)
    */
    export function pcall(method: 'SRANDMEMBER' | 'srandmember', key: string): string | null | ErrorResult;
    /**
    * SRANDMEMBER
    *
    * See [SRANDMEMBER](https://redis.io/commands/SRANDMEMBER)
    */
    export function pcall(method: 'SRANDMEMBER' | 'srandmember', key: string, count: number): string[] | null | ErrorResult;

    /**
    * SREM
    *
    * See [SREM](https://redis.io/commands/SREM)
    * @vararg
    */
    export function pcall(method: 'SREM' | 'srem', key: string, ...members: string[]): number | ErrorResult;

    /**
    * SSCAN
    *
    * See [SSCAN](https://redis.io/commands/SSCAN)
    */
    export function pcall(method: 'SSCAN' | 'sscan', key: string, cursor: number, match?: string): [number, string[]] | ErrorResult;

    /**
    * SUNION
    *
    * See [SUNION](https://redis.io/commands/SUNION)
    * @vararg
    */
    export function pcall(method: 'SUNION' | 'sunion', ...keys: string[]): string[] | ErrorResult;

    /**
    * SUNIONSTORE
    *
    * See [SUNIONSTORE](https://redis.io/commands/SUNIONSTORE)
    * @vararg
    */
    export function pcall(method: 'SUNIONSTORE' | 'sunionstore', destination: string, ...keys: string[]): number | ErrorResult;
  }
}
