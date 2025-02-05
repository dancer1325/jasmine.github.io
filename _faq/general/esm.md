---
question: Can Jasmine test code that's in ES modules?
---

* | ES modules,
  * Jasmine can be used /
    * 👀process -- depends on -- how you're using Jasmine 👀
      * if you're using Jasmine standalone OR ANY OTHER in-browser setup | you control the HTML tags -> use `<script type="module">`
      * if you're using jasmine NPM package -> your scripts -- will be, via [dynamic import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports), -- loaded
        * == if `package.json`'s `"type": "module"` or file's extension `.mjs` -> files -- treated as -- ES modules
      * jasmine-browser-runner
        * if scripts' extension is `.mjs` -> scripts -- loaded as -- ES modules 
          * if you want to override it -> configure `esmFilenameExtension`
      * if you're using a third-party tool (_Example:_ Karma -- to run -- Jasmine) -> check that tool's documentation
