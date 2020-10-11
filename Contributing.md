# Contributing
Follow these steps to add a function to this library.

## General
1. Clone the repo
1. Run `npm install` in the repo
1. Find [an issue]() to contribute to
1. Create a branch for the issue

## Adding a function
1. Create a [Gist](https://gist.github.com) to implement the function. The Gist should take the form of ```fn = function() { ...```. [A previous implementation](https://github.com/ShittyLabs/ShittyLINQ.js/tree/develop/src) can be referenced to assist.
1. View the raw Gist, and copy the path from the URL (everything **after** `https://gist.githubusercontent.com/`)
1. Create a mapping from the function name to the Gist path in the [DangerLinqFunction enum](./src/DangerLinqFunction.ts)
1. Create a mapping from the function enum value to the type signature of the function in the [DangerLinqFunctionMapping object](./src/DangerLinqFunctionMapping.ts)
1. Add the overload for the enum value to the [DangerLinq function](./src/index.js)
1. Add some tests to test both the correct functionality of the function and the expected error conditions. These tests should be placed in a new file named using the `test/<function>.spec.ts` convention. See existing tests for reference. We are using Mocha and Chai for tests and assertions.
1. Run `npm test` to ensure your tests are passing.
1. Once tests are passing, create a PR from your issue branch to the `main` branch of [DangerLinq](https://github.com/ShittyLabs/DangerLinq)!
