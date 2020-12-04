import 'lua-types/5.2'
import './common'
import './commands'

declare global {
  export const KEYS: (string | null)[];
  export const ARGV: (string | null)[];

  /** @noSelf */
  namespace redis {
    // Note: the `call` function is defined in ./commands

    // Other commands
    export function error_reply(error_string: string): void;
    export function status_reply(status_string: string): void;
  }
}