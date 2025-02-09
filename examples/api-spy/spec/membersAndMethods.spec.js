describe('members', () => {
    it('callData', () => {
        const spy = jasmine.createSpy('getSomething');
        // 1. it's static
        // 1.1 BEFORE being invoked the spy     -> undefined
        console.log("BEFORE invoking the spy -- spy.callData ", spy.callData);     // undefined
        // 1.2 AFTER invoking the spy     ->
        spy('arg1', 42);
        spy('arg2', 'arg3');
        console.log("AFTER invoking the spy -- spy.callData ", spy.callData);     //    STILL undefined     -- Reason: 🧠 it's static 🧠 --

        // TODO: How to use it? issue created -- https://github.com/jasmine/jasmine.github.io/issues/176
        // 2. get access -- via -- some Spy.call
        console.log("AFTER invoking the spy - spy.calls.mostRecent() ", spy.calls.mostRecent());
        // 2.1  callData.object
        console.log("AFTER invoking the spy - spy.calls.mostRecent().object ", spy.calls.mostRecent().object);
        // 2.2  callData.invocationOrder
        console.log("AFTER invoking the spy - spy.calls.mostRecent().invocationOrder ", spy.calls.mostRecent().invocationOrder);
        // 2.3  callData.args
        console.log("AFTER invoking the spy - spy.calls.mostRecent().args ", spy.calls.mostRecent().args);
        // 2.4  callData.returnValue
        console.log("AFTER invoking the spy - spy.calls.mostRecent().returnValue ", spy.calls.mostRecent().returnValue);
    });

    it('and', () => {
        const spy = jasmine.createSpy('getSomething');

        // 1. -- get access to -- default SpyStrategy
        // 1.1.     .and.SpyStrategyMembers
        console.log("spy.and.identity ", spy.and.identity);     // .identity        SpyStrategyMembers
        // 1.2      .and.SpyStrategyMethods
        spy.and.returnValue(42);        //.returnValue()      SpyStrategyMethods
        console.log("spy() ", spy());
        // 1.3      default -> see `withArgs(args)`
    });
})

describe('methods', () => {
    it('withArgs(args)', () => {
        // TODO: Fix
        /*spyOn(someObj, 'func').withArgs(1, 2, 3).and.returnValue(42);
        someObj.func(1, 2, 3); // returns 42*/
    });
})