// TODO:

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