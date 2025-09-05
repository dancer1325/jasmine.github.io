---
question: How is Jasmine versioned?
slug: versions
---

* Jasmine 
  * versioning
    * follows [Semantic Versioning Specification](http://semver.org/)
      * ==
        * major versions
          * / breaking changes OR OTHER significant work
          * _Example:_ 1.0, 2.0, etc.
          * infrequent
    * ⚠️DIFFERENT / packages ⚠️
      * `jasmine`
        * 's major & minor versions == `jasmine-core`'s major & minor versions`
        * 's patch versions != `jasmine-core`'s patch versions
      * `jasmine-browser-runner` 
        * 's version numbers != `jasmine-core`'s version numbers
  * ways to use OR packages
    * [`jasmine` package](https://github.com/jasmine/jasmine-npm)
      * == 👀runs specs | Node👀
    * [`jasmine-browser-runner` package](https://github.com/jasmine/jasmine-browser-runner)
