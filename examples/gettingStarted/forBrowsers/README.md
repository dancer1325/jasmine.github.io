* goal
  * Jasmine -- for -- Browsers

## how has it been created?
* `npm init -y`
* `npm install --save-dev jasmine-browser-runner jasmine-core`
* `npx jasmine-browser-runner init`
  * create [jasmine-browser.mjs](spec/support/jasmine-browser.mjs)
* | your "package.json",
    ```
    "scripts": { "test": "jasmine-browser-runner runSpecs" }
    ```

## how to run?
* `npm test`
  * open browsers / display output run tests
    * by default, http://localhost:64734
