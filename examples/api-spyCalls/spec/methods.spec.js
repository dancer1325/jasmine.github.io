describe('methods', () => {
    // TODO:

    it('count() -> Integer', () =>{
        const spy = jasmine.createSpy('spy');
        spy(1, 2, 3);
        spy('a', 'b', 'c');
        spy(true);

        console.log("spy.calls.count() ", spy.calls.count());   // # of spy invocations
        expect(spy.calls.count()).toBe(3);
    });

    // TODO:

    it('mostRecent()', () => {
        const spy = jasmine.createSpy('spy');

        // 1. BEFORE invoking       -> undefined
        console.log("BEFORE INVOKING - spy.calls.mostRecent() ", spy.calls.mostRecent());     // -- via -- .calls
        spy(1, 2, 3);
        spy('a', 'b', 'c');
        // 2. AFTER invoking        -> recent callData
        console.log("AFTER INVOKING - spy.calls.mostRecent() ", spy.calls.mostRecent());     // -- via -- .calls
    });

    // TODO:
})