---
question: Can I use Jasmine 5.x with Karma?
---

* karma-jasmine v5.1 (latest one) + jasmine-core 5.x
  * compatible
  * if you want to override karma-jasmine's dependency specification -> | `package.json`

    ```
    {
        // ...
        "overrides": {
            "karma-jasmine": {
                "jasmine-core": "^5.0.0"
            }
        }
    }
    ```