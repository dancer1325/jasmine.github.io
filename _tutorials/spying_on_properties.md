---
layout: article
title: Spying on Properties
---

# Spying Properties

* Properties complication > functions complication 
* | Jasmine,
  * property spy syntax != function spy syntax
  * what you can do -- via -- property spy  -> can be done -- via -- function spy

* `spyOnProperty()`
  * create 
    * getter spy or
    * setter spy

* TODO: How / Where to create it?
```javascript
it("allows you to create spies for either type", function() {
  spyOnProperty(someObject, "myValue", "get").and.returnValue(30);
  spyOnProperty(someObject, "myValue", "set").and.callThrough();
});
```

Changing the value of an existing spy is more difficult than with a function, because you cannot _refer_ to a property without calling its `getter` method. 
To get around this, you can save a reference to the spy for later changes.

```javascript
beforeEach(function() {
  this.propertySpy = spyOnProperty(someObject, "myValue", "get").and.returnValue(1);
});

it("lets you change the spy strategy later", function() {
  this.propertySpy.and.returnValue(3);
  expect(someObject.myValue).toEqual(3);
});
```

If saving a reference to the spy is awkward, you can also access it from anywhere in your test using
`Object.getOwnPropertyDescriptor`.

```javascript
beforeEach(function() {
  spyOnProperty(someObject, "myValue", "get").and.returnValue(1);
});

it("lets you change the spy strategy later", function() {
  Object.getOwnPropertyDescriptor(someObject, "myValue").get.and.returnValue(3);
  expect(someObject.myValue).toEqual(3);
});
```

You can create a spy object with several properties on it quickly by passing an array or hash of properties as
a third argument to `createSpyObj`. In this case you won't have a reference to the created spies, so if you
need to change their spy strategies later, you will have to use the `Object.getOwnPropertyDescriptor` approach.

```javascript
it("creates a spy object with properties", function() {
  let obj = createSpyObj("myObject", {}, { x: 3, y: 4 });
  expect(obj.x).toEqual(3);

  Object.getOwnPropertyDescriptor(obj, "x").get.and.returnValue(7);
  expect(obj.x).toEqual(7);
});
```
