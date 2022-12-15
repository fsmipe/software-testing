// Joona
import chai from 'chai'
import slice from "../COMP.SE.200-2022-2023-1-main/src/slice.js"
const expect = chai.expect

describe("slice", () => {
    let array = [];
    it("Slice array starting from third element to the last", () =>{
        array = [1, 2, 3, 4];
        var test = slice(array, 2);
        expect(test).to.eql([3,4]);
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

    it("Slice empty array", () =>{
        array = [];
        var test = slice(array, 1, 2);
        expect(test).to.eql([]);
    });

    it("Slice with end later than start", () =>{
        array = [];
        var test = slice(array, 2, 1);
        expect(test).to.eql([]);
    });

    it("Slice with -3 to -4", () =>{
        array = [1, 2, 3, 4];
        var test = slice(array, -3, -4);
        expect(test).to.eql([]);
    });

    it("Slice with -4 to -3", () =>{
        array = [1, 2, 3, 4];
        var test = slice(array, -4, -3);
        expect(test).to.eql([1]);
    });

    it("Slice a whole sparse array to return dense", () =>{
        array = [1, , 3, 4];
        var test = slice(array, 0);
        expect(test).to.eql([1, 3, 4]);
    });
})