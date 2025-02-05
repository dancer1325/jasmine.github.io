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
* TODO:
        Included is a sample app and sample specs.
        Open SpecRunner.html and run the included specs.
        Both the source files and their respective specs are linked in the &lt;head&gt; of the SpecRunner.html.
      </p>
      <p>
        To start using Jasmine, replace the source/spec files with your own.
        Then load the SpecRunner.html in your favorite browser.
      </p>
      <p>
        You don't need a web server to run the standalone distribution, but it
        helps. Some browsers limit the error information that they provide to
        scripts running from file:// URLs, and this can make it harder to debug
        uncaught exceptions and unhandled promise rejections. If that's a concern,
        consider using a simple web server like the one provided by the
        <a href="https://www.npmjs.com/package/serve">serve</a> package.
      </p>
* see more [here](https://github.com/jasmine/jasmine#installation)