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
})