---
question: How can I mock AJAX/fetch/XMLHTTPRequest calls?
---

* if you use modern HTTP client APIs (_Example:_ [axios](https://www.npmjs.com/package/axios) or [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)) -> mock -- via -- Jasmine spies
  * _Example:_ [ajax](/examples/faq-spies/ajaxSpec.js)

* if you use `XMLHttpRequest` -> use [jasmine-ajax](https://github.com/jasmine/jasmine-ajax)
