export default {
  spec_dir: "spec",         // prefix for spec_files & helpers
  spec_files: [
    "**/*[sS]pec.?(m)js",
    "!**/*nospec.js"        // !    ==    exclusion
  ],
  helpers: [
    "helpers/**/*.?(m)js"
  ],
  env: {
    stopSpecOnExpectationFailure: false,
    random: true,
    forbidDuplicateNames: true
  }
}
