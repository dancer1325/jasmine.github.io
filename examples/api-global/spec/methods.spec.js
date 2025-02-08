// TODO:

describe('spyOn', () => {
    let person = {
        mainSkill: () => {
            return 'study';
        }
    };

    it('basic', () => {
        person.mainSkill();     // invoked | PREVIOUS to spy
        spyOn(person, 'mainSkill');
        //expect(person.mainSkill()).toBe('study');         // ERROR        if you spy & NOT specified -> undefined
        //expect(person.mainSkill).toHaveBeenCalled();        // ERROR        Reason: 🧠it was invoked, PREVIOUS to be spied 🧠
        person.mainSkill();     // invoked | AFTER spying
        expect(person.mainSkill).toHaveBeenCalled();

        //spyOn(person, 'mainSkill').and.returnValue('sleep');    // ERROR    Reason: 🧠NOT possible to spy SEVERAL times 🧠
    });

    it('.and.returnValue()', () => {
        spyOn(person, 'mainSkill').and.returnValue('sleep');
        expect(person.mainSkill()).toBe('sleep');
    });
});

describe('spyOnProperty', () => {
    let person = {
        mainSkill: 'study',      // property / defined as simple value   ==   != getter & setter
        _name: 'Aida',

        get anotherSkillWithAccessor() {    // property / defined with a getter
            return 'study';
        },

        get name() {
            return this._name;
        },
        set name(value) {
            this._name = value + " - ADDED";
        }
    };

    it('basic', () => {
        // NO sense, to spy | property WITHOUT accessors
        // spyOnProperty(person, 'mainSkill');              // ERROR
        // expect(person.mainSkill).toHaveBeenCalled();    // ERROR
        const spy = spyOnProperty(person, 'anotherSkillWithAccessor');
        //expect(person.anotherSkillWithAccessor).toHaveBeenCalled();       // ERROR   - Reason: 🧠 person.anotherSkillWithAccessor != spy 🧠
        //expect(spy).toHaveBeenCalled();       // ERROR    - Reason: 🧠property spied NOT invoked YET 🧠
        person.anotherSkillWithAccessor;        // invoke the spy | property
        expect(spy).toHaveBeenCalled();
    });

    it('passing accessType', () => {
        // NO sense, to spy | property WITHOUT accessors
        //spyOnProperty(person, 'mainSkill', 'get').and.returnValue('sleep');     // ERROR
        //expect(person.mainSkill).toBe('sleep');   // ERROR

        const spy = spyOnProperty(person, 'name', 'set');   // undefined the spied property
        person.name = 'Alfred';
        expect(spy).toHaveBeenCalled();
        expect(person.name).toBe('Aida');   // default one
    });

    it('passing accessType & mock value', () => {
        const spy = spyOnProperty(person, 'name', 'set').and.returnValue("Alfredooooooo");   // undefined the spied property
        person.name = 'Alfred';
        expect(spy).toHaveBeenCalled();
        expect(person.name).toBe('Aida');   // default one      Reason:🧠You mock setter, but you access to getter 🧠
    });
})