import '../common'

declare global {
  /** @noSelf */
  namespace redis {
    // redis.call(...)

    /**
    * LPOP
    *
    * See [LPOP](https://redis.io/commands/LPOP)
    */
    export function call(method: 'LPOP' | 'lpop', key: string): string | null;

    /**
    * LPUSH
    *
    * See [LPUSH](https://redis.io/commands/LPUSH)
    */
    export function call(method: 'LPUSH' | 'lpush', key: string, element: Value): number;
    /**
    * LPUSH
    *
    * See [LPUSH](https://redis.io/commands/LPUSH)
    * @vararg
    */
    export function call(method: 'LPUSH' | 'lpush', ...keyelements: Value[]): number;

    /**
    * LPUSHX
    *
    * See [LPUSHX](https://redis.io/commands/LPUSHX)
    */
    export function call(method: 'LPUSHX' | 'lpushx', key: string, element: Value): number;
    /**
    * LPUSHX
    *
    * See [LPUSHX](https://redis.io/commands/LPUSHX)
    * @vararg
    */
    export function call(method: 'LPUSHX' | 'lpushx', ...keyelements: Value[]): number;

    /**
    * RPOP
    *
    * See [RPOP](https://redis.io/commands/RPOP)
    */
    export function call(method: 'RPOP' | 'rpop', key: string): string | null;

    /**
    * RPUSH
    *
    * See [RPUSH](https://redis.io/commands/RPUSH)
    */
    export function call(method: 'RPUSH' | 'rpush', key: string, element: Value): number;
    /**
    * RPUSH
    *
    * See [RPUSH](https://redis.io/commands/RPUSH)
    * @vararg
    */
    export function call(method: 'RPUSH' | 'rpush', ...keyelements: Value[]): number;

    /**
    * RPUSHX
    *
    * See [RPUSHX](https://redis.io/commands/RPUSHX)
    */
    export function call(method: 'RPUSHX' | 'rpushx', key: string, element: Value): number;
    /**
    * RPUSHX
    *
    * See [RPUSHX](https://redis.io/commands/RPUSHX)
    * @vararg
    */
    export function call(method: 'RPUSHX' | 'rpushx', ...keyelements: Value[]): number;

    // redis.pcall(...)

    /**
    * LPOP
    *
    * See [LPOP](https://redis.io/commands/LPOP)
    */
    export function pcall(method: 'LPOP' | 'lpop', key: string): string | null | ErrorResult;

    /**
    * LPUSH
    *
    * See [LPUSH](https://redis.io/commands/LPUSH)
    */
    export function pcall(method: 'LPUSH' | 'lpush', key: string, element: Value): number | ErrorResult;
    /**
    * LPUSH
    *
    * See [LPUSH](https://redis.io/commands/LPUSH)
    * @vararg
    */
    export function pcall(method: 'LPUSH' | 'lpush', ...keyelements: Value[]): number | ErrorResult;

    /**
    * LPUSHX
    *
    * See [LPUSHX](https://redis.io/commands/LPUSHX)
    */
    export function pcall(method: 'LPUSHX' | 'lpushx', key: string, element: Value): number | ErrorResult;
    /**
    * LPUSHX
    *
    * See [LPUSHX](https://redis.io/commands/LPUSHX)
    * @vararg
    */
    export function pcall(method: 'LPUSHX' | 'lpushx', ...keyelements: Value[]): number | ErrorResult;

    /**
    * RPOP
    *
    * See [RPOP](https://redis.io/commands/RPOP)
    */
    export function pcall(method: 'RPOP' | 'rpop', key: string): string | null | ErrorResult;

    /**
    * RPUSH
    *
    * See [RPUSH](https://redis.io/commands/RPUSH)
    */
    export function pcall(method: 'RPUSH' | 'rpush', key: string, element: Value): number | ErrorResult;
    /**
    * RPUSH
    *
    * See [RPUSH](https://redis.io/commands/RPUSH)
    * @vararg
    */
    export function pcall(method: 'RPUSH' | 'rpush', ...keyelements: Value[]): number | ErrorResult;

    /**
    * RPUSHX
    *
    * See [RPUSHX](https://redis.io/commands/RPUSHX)
    */
    export function pcall(method: 'RPUSHX' | 'rpushx', key: string, element: Value): number | ErrorResult;
    /**
    * RPUSHX
    *
    * See [RPUSHX](https://redis.io/commands/RPUSHX)
    * @vararg
    */
    export function pcall(method: 'RPUSHX' | 'rpushx', ...keyelements: Value[]): number | ErrorResult;
  }
}
