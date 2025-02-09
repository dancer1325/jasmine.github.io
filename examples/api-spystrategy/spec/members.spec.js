describe('members', () => {
    it('identity', () => {
        const calculatorSpy = jasmine.createSpy('calculatorAdd');
        expect(calculatorSpy.and.identity).toBe('calculatorAdd');   // access -- via -- `and`    == `and.identity`
        console.log("calculatorSpy.and.identity ", calculatorSpy.and.identity);
    });
})