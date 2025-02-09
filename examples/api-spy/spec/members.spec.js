describe('members', () => {
    it('callData', () => {
        // TODO:
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