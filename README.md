# redis-lua-types

This is a work-in-progress set of TypeScript definitions for [Redis scripts](https://redis.io/commands/eval) for use with [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua).

TypeScriptToLua makes it easier to write and maintain Lua scripts by compiling them from TypeScript.

## Caveats

- Some commands are not available in all versions of Redis. Currently, these type definitions do not differentiate features available in specific versions.
- The type definitions are based on reading the [Redis command docs](https://redis.io/commands). They have not all been tested so it is possible that some may have incorrect return types. (If you find such a bug, please submit a PR to fix it!)

## Contributing

PRs are welcome to add support for other Redis commands!
