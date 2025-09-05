---
question: What is Jasmine's approach to browser and Node version support?
slug: browser-and-node-versions
---

* EACH Jasmine release note
  * specifies the supported
    * browser versions
    * Node versions

* browser versions & node versions
  * FULLY supported
    * == versions /
      * receive security updates,
      * available to test -- against -- CI
      * available -- for -- local testing
  * OLDER versions
    * == older Node versions & non-evergreen browsers
    * if it's practical maintain it -> supported them
  * support status platform versions rule

| Platform | Fully supported | Supported on a best effort basis                                   | Unsupported                                                                         |
|----------|----------------|--------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| Node | Current, active, and maintenance LTS releases | Past-EOL, LTS releases / STILL work $ available \| CI | EVERYTHING else <br/> &nbsp;&nbsp; _Example:_ odd-numbered major releases |
| Evergreen browsers (Chrome, Firefox mainline, Edge) | Latest version |                                                                    | EVERYTHING else*                                                                    |
| Firefox ESR | Latest major version | Past-EOL versions that are still known to work and available in CI | Everything else                                                                     |
| Safari | | Versions that are known to work and available in CI                | Everything else                                                                     |
| All other platforms | |                                                                    | All versions                                                                        |

* [Selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver)
  * == dependency of jasmine-browser-runner /
    * has restrictive rolling support
