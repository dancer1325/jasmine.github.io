// TODO:

describe('createSpy', () => {
    it('NOT installed | anywhere & NO implementation', () => {
        const spy = jasmine.createSpy('mySpy');     // NOT attached | ANY object

        // an object / has a method
        const someObject = {
            existingMethod: function() { return 'original'; }
        };

        const bareSpyResult = spy();
        console.log("bareSpyResult ", bareSpyResult);       // undefined        == NO implementation
        const commonObjectMethodResult = someObject.existingMethod();    // calls the original method
        console.log("commonObjectMethodResult ", commonObjectMethodResult);
    });

    it('createSpy(\'name\')', () =>{
        const spy = jasmine.createSpy('mySpy');

        // name -- 'mySpy' -- is used | failure messages
        //expect(spy).toHaveBeenCalled();     // ERROR          -- Uncomment to check
    })

    it('createSpy(originalFn)', () => {
        function calculateTotal(price, tax) {
            return price + (price * tax);
        }

        // createSpy(originalFn)
        const spy = jasmine.createSpy(calculateTotal);

        // 1. invoke DIRECTLY   ==      WITHOUT PREVIOUSLY  `.and.callThrough()`
        console.log("| BEFORE `.and.callThrough()` spy(10, 0.1) ", spy(10, 0.1));      // undefined

        // 2. invoke PREVIOUSLY     `.and.callThrough()`
        spy.and.callThrough();
        console.log("| AFTER `.and.callThrough()` spy(10, 0.1) ", spy(10, 0.1));      // invoke the originalFn
    })

    it('createSpy() vs spyOn()', () => {
        function calculateTotal(price, tax) {
            return price + (price * tax);
        }

        // 1. createSpy()
        const spy = jasmine.createSpy('mySpy', calculateTotal);

        // 2. spyOn()
        const obj = {
            calculate: calculateTotal
        };
        spyOn(obj, 'calculate');        // ⚠️== ATTACH | object       != createSpy() ⚠️

        console.log("| BEFORE `.and.callThrough()` obj.calculate(10, 0.1) ", obj.calculate(10, 0.1)); // undefined
        // Reason: 🧠invoke DIRECTLY   ==      WITHOUT PREVIOUSLY  `.and.callThrough()` 🧠        == createSpy()

        obj.calculate.and.callThrough();
        console.log("| AFTER `.and.callThrough()` obj.calculate(10, 0.1) ", obj.calculate(10, 0.1));
    });
});

describe('createSpyObj', () => {
    // NOT global
    //createSpyObj('mySpyObj', ['method1', 'method2']);     // ERROR

    // ONLY pass methodNames
    it('createSpyObj(methodNames)', () => {
        // 1. methodNames   -- as -- [String]
        const spyObj = jasmine.createSpyObj(['save', 'delete', 'update']);

        // method's arguments can be assumed random
        spyObj.save('document');
        spyObj.update({ id: 1 });

        expect(spyObj.save).toHaveBeenCalledWith('document');
        expect(spyObj.update).toHaveBeenCalledWith({ id: 1 });
        expect(spyObj.delete).not.toHaveBeenCalled();

        // 2. methodNames   -- as -- Object /
        // Object's keys == method names
        // Object's values == `returnValue`
        const spyObj2 = jasmine.createSpyObj({
            save: true,
            delete: false,
            update: { status: 'success' }
        });

        expect(spyObj2.save()).toBe(true);
        expect(spyObj2.delete()).toBe(false);
        expect(spyObj2.update()).toEqual({ status: 'success' });

    });

    // baseName & methodNames
    it('createSpyObj(baseName, methodNames)', () => {
        // baseName + methodNames
        const spyObj = jasmine.createSpyObj('mySpyObj', ['save', 'delete', 'update']);

        // baseName ('mySpyObj')        will be used here
        console.log(spyObj);
    });

    // propertyNames
    it('createSpyObj(..., propertyNames)', () => {
        // 1. propertyNames  -- as -- Object
        // Object's keys == property names
        // Object's values == `returnValue`
        const spyObj = jasmine.createSpyObj('mySpyObj', ['save', 'delete', 'update'], {
            id: 1,
            name: 'John'
        });

        // propertyNames
        console.log("spyObj.id ", spyObj.id);
        console.log("spyObj.name ", spyObj.name);

        // 2. propertyNames  -- as -- [String]
        const spyObj2 = jasmine.createSpyObj('mySpyObj', ['save', 'delete', 'update'], ['id', 'name']);
        console.log("spyObj2.id ", spyObj2.id);     // property's value undefined
        console.log("spyObj2.name ", spyObj2.name)      // property's value undefined
    });
});

// TODO:

