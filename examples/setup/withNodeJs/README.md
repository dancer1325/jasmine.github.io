* goal
  * Jasmine + NodeJs

## how has it been created?

* `npm init -y`
* `npm install --save-dev jasmine`
* `npx jasmine init`
  * create ["spec/jasmine.mjs"](spec/support/jasmine.mjs)
* `npx jasmine examples`
  * create
    * source files ("lib/")
    * example spec ("spec/jasmine_examples" & "spec/helpers")
* customize ["spec/jasmine.mjs"](spec/support/jasmine.mjs)

## how to run?
* ways
  * | this path,
    * `npm test` == `jasmine`
      * check "spec/**/*nospec.js" are NOT executed 
        * Reason: 🧠`spec_files`: `"!**/*nospec.js"`🧠
      * check `helpers` are executed 1! | BEFORE ALL specs
    * `npx jasmine`

* | this path,
  * `npx jasmine spec/more/simplespec.js`
    * execute ONLY "simplespec.js"
  * `npx jasmine spec/**/si*espec.js` 
    * specify execution -- via -- glob
  * `npx jasmine --filter="Simplespec"`
    * specify execution -- via -- `--filter`
