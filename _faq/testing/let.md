---
question: How can I run code | BEFORE <code>describe</code>'s <code>beforeEach</code>? Does Jasmine have an equivalent of rspec's <code>let</code>?
---

* ❌NOT possible ❌
* alternative
  * refactor your test setup / inner `describe`s  -- do NOT need to, about -- outer `describe` 
    * undo or
    * override 

* _Example:_ [faq-testing](/examples/faq-testing)

* TODO:
That doesn't work, in part because the inner `beforeEach` functions run after the user is already logged in.
Some test frameworks provide a way to re-order the test setup so that parts of the setup in an inner `describe` can run before parts of the setup in an outer `describe`. 
RSpec's `let` blocks are an example of this. 
Jasmine doesn't provide such functionality. 
We've learned through experience that having the setup flow control bounce back and forth between inner and outer `describes` leads to suites that are hard to understand
and hard to modify. 
Instead, try refactoring the setup code so that each part happens after all of the setup that it depends on. 
Usually this means taking the contents of an outer `beforeEach` and inlining it into the inner specs or
`beforeEach`es. 
If this leads to excessive code duplication, that can be handled with regular functions, just like in non-test code:
