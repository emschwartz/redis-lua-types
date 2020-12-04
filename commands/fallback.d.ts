import '../common'

declare global {
  namespace redis {

    /**
     * Sorry, this command doesn't have type definitions yet. If you'd like to add them, please submit a pull request!
     */
    export function call(method: string, ...args: any): unknown;
    /**
     * Sorry, this command doesn't have type definitions yet. If you'd like to add them, please submit a pull request!
     */
    export function pcall(method: string, ...args: any): unknown;
  }
}
