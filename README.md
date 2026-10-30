# DevOps_CI_24BCS043

Small Node.js project for Assignment 3a (Git, GitHub and Jenkins).
It contains two Library Automation System rules: the 14-day due date and the Rs.2 per day fine.

## Run
```
npm run build
npm test
```
Requires Node.js 18 or newer and npm (tested on Node 22).

## Structure
- `src/library.js` - application code
- `tests/library.test.js` - tests (Node built-in test runner)
- `Jenkinsfile` - CI pipeline: Checkout, Build, Test, Result

Late fine rule: Rs.2 per day after the due date.
