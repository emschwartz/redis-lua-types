import 'lua-types/5.2'
import './common'
import './commands'

declare global {
  /**
   * See [EVAL](https://redis.io/commands/eval)
   */
  export const KEYS: string[];
  /**
   * See [EVAL](https://redis.io/commands/eval)
   */
  export const ARGV: string[];

  // Note: the @noSelf compiler annotation is needed
  // to ensure that the functions are compiled to Lua
  // as redis.<method> instead of redis:<method>
  /** @noSelf */
  namespace redis {
    // Note: the `call` and `pcall` functions are defined in ./commands

    // Other commands
    /**
     * See [Helper functions to return Redis types](https://redis.io/commands/eval#helper-functions-to-return-redis-types)
     */
    export function error_reply(error_string: string): void;
    /**
     * See [Helper functions to return Redis types](https://redis.io/commands/eval#helper-functions-to-return-redis-types)
     */
    export function status_reply(status_string: string): void;
  }
}
