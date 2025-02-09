describe('matchers\' methods', () => {
    it('.nothing()', () => {
        expect().nothing();
    })

    it('.toBe(expected)', () => {
        expect("value").toBe("value");
    })

    it('.toBeCloseTo(expected, decimalPointsNumberOptional)', () => {
        expect(0.2 + 0.1).toBeCloseTo(0.3, 2);
        expect(42.2001).toBeCloseTo(42.2, 3);
        expect(42.2001).toBeCloseTo(42.2,4);        // | 4ª decimal, fails
    })

    // TODO:

    let things = ['d', 'c', 'c'];
    it('.withContext(message)', () => {
        expect(things[0]).withContext('thing 0').toEqual('a');      //  'thing 0'           added | failure message
        expect(things[1]).withContext('thing 1').toEqual('b');      //  'thing 1'           added | failure message
    });
})