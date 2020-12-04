import 'lua-types/5.2'
import './common'
import './commands'

declare global {
  export const KEYS: (string | null)[];
  export const ARGV: (string | null)[];

  /** @noSelf */
  namespace redis {
    // Note: the `call` function is defined in ./commands
    /**
     * Sorry, this command doesn't have type definitions yet. If you'd like to add them, please submit a pull request!
     */
    export function call(method: string, ...args: any): unknown;
    /**
     * Sorry, this command doesn't have type definitions yet. If you'd like to add them, please submit a pull request!
     */
    export function pcall(method: string, ...args: any): unknown;

    // Other commands
    export function error_reply(error_string: string): void;
    export function status_reply(status_string: string): void;
  }
}