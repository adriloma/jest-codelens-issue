# jest-codelens-issue
Basic repo to report issue on vscode-jest extension for vscode

## How to reproduce
* clone repository and `npm ci`
* on `test.spec.js` check that codelens appears over the test

![image](https://user-images.githubusercontent.com/14041944/105522903-17fec600-5cde-11eb-9797-2ee2a4bdb22d.png)

* uncomment line 9
* check that codelens and tick icon are gone

![image](https://user-images.githubusercontent.com/14041944/105523019-34026780-5cde-11eb-988b-07a49d54e1f1.png)

### Expected Behavior

Debug codelens do not disappears when using arrow function with no braces on `jest.mock`.
