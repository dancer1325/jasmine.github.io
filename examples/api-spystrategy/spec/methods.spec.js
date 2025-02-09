describe('methods', () => {
    it('callFake(fn)', () => {
        // TODO:
    })

    // TODO:

    it('returnValue(value)', () => {
        // 1. | spy
        const spy = jasmine.createSpy('spy');
        spy.and.returnValue('foo');     // .and     required to -- get access to -- SpyStrategy

        const spyInvoked = spy();
        expect(spyInvoked).toBe('foo');
        console.log("spyInvoked ", spyInvoked);

        // 2. | object
        const spyObject = jasmine.createSpyObj(['methodNameFirst']);
        spyObject.methodNameFirst.and.returnValue(13);      // .and     required to -- get access to -- SpyStrategy
        const spyObjectInvoked = spyObject.methodNameFirst();
        expect(spyObjectInvoked).toBe(13);
        console.log("spyObjectInvoked ", spyObjectInvoked);
    })
})