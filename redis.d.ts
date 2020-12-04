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

  // Note that the @noSelf compiler annotation is needed
  // to ensure that the functions are compiled to Lua
  // as redis.<method> instead of redis:<method>
  /** @noSelf */
  namespace redis {
    // Note: the `call` function is defined in ./commands

    // Other commands
    export function error_reply(error_string: string): void;
    export function status_reply(status_string: string): void;
  }
}