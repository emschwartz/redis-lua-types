import '../common'

declare global {
  /** @noSelf */
  namespace redis {
    // redis.call(...)

    /**
    * EXISTS
    *
    * See [EXISTS](https://redis.io/commands/EXISTS)
    */
    export function call(method: 'EXISTS' | 'exists', key: string): 0 | 1;
    /**
    * EXISTS
    *
    * See [EXISTS](https://redis.io/commands/EXISTS)
    * @vararg
    */
    export function call(method: 'EXISTS' | 'exists', ...keys: string[]): (0 | 1)[];

    /**
    * EXPIRE
    *
    * See [EXPIRE](https://redis.io/commands/EXPIRE)
    */
    export function call(method: 'EXPIRE' | 'expire', key: string, seconds: number): 0 | 1;

    /**
    * EXPIREAT
    *
    * See [EXPIREAT](https://redis.io/commands/EXPIREAT)
    */
    export function call(method: 'EXPIREAT' | 'expireat', key: string, timestamp: number): 0 | 1;

    // redis.pcall(...)

    /**
    * EXISTS
    *
    * See [EXISTS](https://redis.io/commands/EXISTS)
    */
    export function pcall(method: 'EXISTS' | 'exists', key: string): 0 | 1 | ErrorResult;
    /**
    * EXISTS
    *
    * See [EXISTS](https://redis.io/commands/EXISTS)
    * @vararg
    */
    export function pcall(method: 'EXISTS' | 'exists', ...keys: string[]): (0 | 1)[] | ErrorResult;

    /**
    * EXPIRE
    *
    * See [EXPIRE](https://redis.io/commands/EXPIRE)
    */
    export function pcall(method: 'EXPIRE' | 'expire', key: string, seconds: number): 0 | 1 | ErrorResult;

    /**
    * EXPIREAT
    *
    * See [EXPIREAT](https://redis.io/commands/EXPIREAT)
    */
    export function pcall(method: 'EXPIREAT' | 'expireat', key: string, timestamp: number): 0 | 1 | ErrorResult;
  }
}
