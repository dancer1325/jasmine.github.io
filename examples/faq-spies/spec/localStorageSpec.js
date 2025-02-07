// TODO: Fix to make it work
describe('localStorage fail', () => {
    it('sets foo to bar on localStorage', function() {
        spyOn(localStorage, 'setItem');
        localStorage.setItem('foo', 'bar');
        expect(localStorage.setItem).toHaveBeenCalledWith('foo', 'bar');
    });
})

// TODO: Fix it
describe('localStorage success', () => {
    // option1
    it('sets foo to bar on localStorage', function() {
        localStorage.setItem('foo', 'bar');
        expect(localStorage.getItem('foo')).toEqual('bar');
    });
    // option2:
    // 1. create a wrapper around `localStorage`
    // 2. mock the wrapper
    // TODO:
})