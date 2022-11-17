// Joona
import chai from 'chai'
import slice from "../COMP.SE.200-2022-2023-1-main/src/slice.js"
const expect = chai.expect

describe("slice", () => {
    let array = [];
    it("Slice array starting from third element to the last", () =>{
        array = [1, 2, 3, 4];
        var arr = slice(array, 2);
        expect(arr).to.eql([3,4]);
    });

    it("Slice array with start at -3", () =>{
        array = [1, 2, 3, 4];
        var test = slice(array, -3);
        expect(test).to.eql([2, 3,4]);
    });

    it("Slice array from 1 to 2", () =>{
        array = [1, 2, 3, 4];
        var test = slice(array, 1, 2);
        expect(test).to.eql([2]);
    });
})