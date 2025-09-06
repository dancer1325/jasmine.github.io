# Jasmine -- for -- Node.js
* steps
  * `npm install --save-dev jasmine`
  * `npx jasmine init`
    * initialize Jasmine | your project
  * | your "package.json",
    ```
    "scripts": { "test": "jasmine" }
    ```
  * `npm test`
    * run your tests</p>
* see 
  * [setup](/setup)
  * [jasmine-npm](https://github.com/jasmine/jasmine-npm)

# Jasmine -- for -- Browsers
* steps
  * `npm install --save-dev jasmine-browser-runner jasmine-core`
  * `npx jasmine-browser-runner init`
  * | your "package.json"
    ```
    "scripts": {"test": "jasmine-browser-runner runSpecs"}
    ```
  * `npm test`
* see
  * [setup](/setup)
  * [jasmine-npm](https://github.com/jasmine/jasmine-browser)

# Jasmine Standalone
* allows
  * running your specs | web browser

* steps
  * [download it](https://github.com/jasmine/jasmine/releases)
  * if you want to test your source / spec ->
    * create file | "spec/" & add script | SpecRunner.html

* ❌NOT need a web server❌
  * recommendations
    * 👀if you need ALL error information -> use a simple web server (_Example:_ [serve](https://www.npmjs.com/package/serve))👀 
    * Reason:🧠| provide scripts `file://`, some browsers limit the provided error information
      * -> harder to debug uncaught exceptions🧠 

* see MORE [here](https://github.com/jasmine/jasmine#installation)
