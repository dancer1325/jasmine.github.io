//import { loadThing } from './ajax';
const loadThing = require('./ajax');

// TODO: Fix the tests
describe('loadThing', function() {
    it('fetches the correct URL', function() {
        // create the spy
        const fetch = jasmine.createSpy('fetch')
            .and.returnValue(new Promise(function() {}));

        loadThing(17, {}, fetch);

        expect(fetch).toHaveBeenCalledWith('http://example.com/api/things/17');
    });

    it('stores the thing', function() {
        const payload = {
            id: 17,
            name: 'the thing you requested'
        };
        const response = {
            json: function() {
                return payload;
            }
        };
        const thingStore = {};
        const fetch = jasmine.createSpy('fetch')
            .and.returnValue(Promise.resolve(response));

        loadThing(17, thingStore, fetch);

        expect(thingStore[17]).toEqual(payload);
    });
});