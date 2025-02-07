---
question: Why can't I spy | localStorage methods | SOME browsers? What can I do instead?
---

* | browsers / fail
  * Firefox
  * Safari 17

* restrictions / imposed by these browsers
  * NOT allow overriding `localStorage`'s  properties 
    * -> ❌`Jasmine.spyOn` NOT allowed ❌
    * alternatives
      * check the `localStorage`'s state != verify the calls / were made
