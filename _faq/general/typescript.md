---
question: How can I use Jasmine on my TypeScript project?
---

* ways to use Jasmine + TypeScript
  * | importing TS files,
    * compile TypeScript files -- to -- JavaScript files
      * if you're using Vite-specific syntax (_Example:_ extensionless ES module imports) -> use [tsx](https://www.npmjs.com/package/tsx)
      * if you're using standard TypeScript -> use `@babel/register`
        * _Example:_ [React with Node](/_tutorials/react_with_node.md)
      * pros
        * easy to set up
        * the fastest possible edit-compile-run-specs cycle
      * cons
        * by default, NO type checking
          * if you want to add type checking -> 
            * create a separate ".tsconfig" -- for -- YOUR specs / `noEmit=true`
            * run `tsc` BEFORE or AFTER running your specs
  * | disk, compile TypeScript files -- to -- JavaScript files + configure Jasmine / run the compiled TypeScript files
    * if you're using Vite-specific syntax (_Example:_ extensionless ES module imports) -> use esbuild
    * if you're using standard TypeScript -> use tsc
    * pros
      * 's workflow == compiled languages' workflow
      * ⚠️if you want to write TypeScript specs & run | browser -> ONLY option ⚠️
    * cons
      * slower edit-compile-run-specs cycle
