* goal
  * | ES modules,
    * if you're using Jasmine standalone -> use `<script type="module">`

## how has it been created?
* download [jasmine-standalone.zip](https://github.com/jasmine/jasmine/releases) & extract required ".js"
* create manually standalone.html

## how to run?
* open [standalone.html](standalone.html) | browser's console
  * check that you get
    * "Uncaught SyntaxError: Unexpected token 'export'"
      * Reason: 🧠due to wrongly imported ES module🧠
    * operations thanks to properly imported ES module -- via -- `<script type="module" ...>`
