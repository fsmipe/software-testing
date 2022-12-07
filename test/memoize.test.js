// Joona
import chai from 'chai'
import memoize from "../COMP.SE.200-2022-2023-1-main/src/memoize.js"
const expect = chai.expect

describe("memoize", () => {
    let object = {'a': 1, 'b': 2};
    let object2 = {'c': 3, 'd': 4};

    it("Find values of an unchanged object", () =>{
        const values = memoize(Object.values)
        expect(values(object)).to.eql([1,2]);
    });

    it("Check that memoized value doesn't change", () =>{
        const values = memoize(Object.values)
        values(object);
        object.a = 2;
        expect(values(object)).to.eql([1,2]);
    });

    it("Refreshing values of the object", () =>{
        const values = memoize(Object.values)
        values.Cache = WeakMap;
        expect(values(object)).to.eql([2,2]);
    });

    it("Throw error check", () =>{
        expect(() => memoize(null)).to.throw('Expected a function');
    });
})