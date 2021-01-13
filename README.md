# Deno Firebase Demo

## Server Installation

- Install [Deno](https://deno.land/#installation)
- Put serviceAccountKey.json under server directory
- To run application 
    ```bash
        cd server/
        deno run --allow-net --allow-read src/index.ts
    ```
- To run tests
    ```bash
        cd server/
        deno test --allow-net --allow-read src/tests.ts
    ```