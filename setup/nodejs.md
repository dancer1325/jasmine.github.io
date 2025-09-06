---
layout: article
title: Node.js Setup
redirect_from: /edge/node.html
---

# Jasmine + Node

* `jasmine` module
  * == CL interface /
    * allows
      * running Jasmine specs | Node.js
        * Jasmine 5.x supports -- Node versions 18, 20, and 22

## Install

* ways to install   
  * `npm install --save-dev jasmine`
    * -> if you want to use: `npx jasmine ...`
  * `npm install -g jasmine` 
    * -> if you want to use: `jasmine ...`

## Init a Project

* `npx jasmine init`
  * create "spec/" / has "jasmine.mjs"

## Generate examples

* `npx jasmine examples`
  * create 
    * source files ("lib/")
    * example spec ("spec/jasmine_examples" & "spec/helpers")

## Configuration

* == 👀customize "spec/support/jasmine.json" OR "spec/support/jasmine.mjs"👀

* "spec/support/jasmine.mjs"
  * requirements
    ```
    export defaul {}
    ```

* `spec_dir`
  * uses
    * prefix -- for -- `spec_files` & `helpers` 

* 's properties paths
  * if they start with `!` == exclusion

* `helpers`
  * ⚠️BEFORE ALL specs, 
    * executed 1! ⚠️

* ways to specify configuration file -- via -- CL
  * `--config`
    ```sh
    jasmine --config=relative/path/to/your/jasmine.json
    ```
  * `JASMINE_CONFIG_PATH` environment variable
    ```sh
    jasmine JASMINE_CONFIG_PATH=relative/path/to/your/jasmine.json
    ```

## Running Specs

* ways to run
  * `jasmine` OR `npx jasmine`
    * execute ALL your specs
  * `jasmine pathToSpecificSpecFile` OR `jasmine globPatternForSpecFiles` OR `jasmine --filter="specName"`
    * execute SPECIFIC specS
    * [glob](https://github.com/isaacs/node-glob)
    * ⚠️specName == `describe(specName, ...)`⚠️

## Using ES Modules

* Jasmine
  * loads -- , via dynamic import, -- your code
    * -> compatible with
      * [ES modules](https://nodejs.org/docs/latest-v16.x/api/esm.html)
      * [CommonJS modules](https://nodejs.org/docs/latest-v16.x/api/modules.html)

* TODO: This
means that a script will be loaded as an ES module if its name ends in `.mjs` or
if the `package.json` of the package containing the file contains 
`"type": "module"`.

The default configuration should work fine for nearly all CommonJS projects as
well as those that use ES modules. But if necessary you can configure Jasmine
to load scripts using `require` by adding `"jsLoader": "require"` to your
Jasmine config file. If you have code that works with `"jsLoader": "require"`
but not without it, please [let us know](https://github.com/jasmine/jasmine-npm/issues/new).
Files with names ending in `.mjs` will be loaded via dynamic import even if
`jsLoader` is set to `"require"`

* see [MORE](../_faq/general/esm.md)


### CLI Options

#### `JASMINE_CONFIG_PATH=`
Specify a relative or absolute path to your configuration file. Can be used as an option or set as an environment variable.

```sh
JASMINE_CONFIG_PATH=spec/config/jasmine.json jasmine

npx jasmine --config=spec/config/jasmine.json
```

#### `--no-color`
Turns off color in spec output

```sh
npx jasmine --no-color
```

#### `--filter=`
Only runs specs that match the given string

```sh
npx jasmine --filter="a spec name"
```

#### `--fail-fast`
Stops execution of the suite after the first expectation failure or other error 

```sh
npx jasmine --fail-fast=true
```

#### `--random=[true|false]`

* allows
  * run specs | 👀semi random order👀 
* override "jasmine.json" OR "jasmine.mjs"

```sh
npx jasmine --random=true
```

#### `--seed=`
Sets the randomization seed if randomization is turned on

```sh
npx jasmine --seed=4321
```

#### `--reporter=`

Sets the default reporter. The value must be a valid 
[import specifier](https://nodejs.org/docs/latest-v16.x/api/esm.html#import-specifiers)
for a module whose default export is a reporter constructor.

```sh
npm i --save-dev jasmine-ts-console-reporter
npx jasmine --reporter=jasmine-ts-console-reporter
```


## Using the library

If you want more granular control over the configuration, Jasmine can also be used as a library in your project.
This allows you to load multiple config files or control your configuration in different ways.

```javascript
const Jasmine = require('jasmine');
const runner = new Jasmine();
```

### Load configuration from a file or from an object

```javascript
runner.loadConfigFile('spec/support/jasmine.json');

runner.loadConfig({
    spec_dir: 'spec',
    spec_files: [
        'appSpec.js',
        'requests/**/*[sS]pec.js',
        'utils/**/*[sS]pec.js'
    ],
    helpers: [
        'helpers/**/*.js'
    ]
});
```

### Custom completion handler

By default, Jasmine will cause the Node process to exit once the suite finishes
running. The exit code will be 0 if the [overall status](https://jasmine.github.io/api/edge/global.html#JasmineDoneInfo)
of the suite is `'passed'` and nonzero in all other cases. If you want to handle
completion differently, you can set the Jasmine instance's `exitOnCompletion`
property to `false` and use the promise returned from `execute`. This is often 
used to message a status to task runners like grunt.

```javascript
runner.exitOnCompletion = false;
const result = await runner.execute();

if (result.overallStatus === 'passed') {
    console.log('All specs have passed');
} else {
    console.log('At least one spec has failed');
}
```

### Reporters

A ConsoleReporter is included if no other reporters are added.
You can configure the default reporter with `configureDefaultReporter`.
The default values are shown in the example.

```javascript
runner.configureDefaultReporter({
    // The `timer` passed to the reporter will determine the mechanism for seeing how long the suite takes to run.
    timer: new jasmine.jasmine.Timer(),
    // The `print` function passed the reporter will be called to print its results.
    print: function() {
        process.stdout.write(arguments);
    },
    // `showColors` determines whether or not the reporter should use ANSI color codes.
    showColors: true
});
```

You can add a custom reporter with `addReporter`. If you add a reporter through `addReporter`, the default ConsoleReporter will not be added.
Multiple reporters can be added.

```javascript
const CustomReporter = require('./myCustomReporter');

runner.addReporter(new CustomReporter());
```

### Run the tests

Calling `execute` will run the specs.

```javascript
runner.execute();
```

`execute` can optionally be called with a list of spec file paths to execute relative to the current working directory and a string to filter by spec name.

```javascript
runner.execute(['fooSpec.js'], 'a spec name');
```

### A simple example using the library

```javascript
const Jasmine = require('jasmine');
const runner = new Jasmine();

runner.loadConfigFile('spec/support/jasmine.json');
runner.configureDefaultReporter({
    showColors: false
});
runner.execute();
```

