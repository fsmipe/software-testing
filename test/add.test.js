// Mikael
import chai from 'chai'
import add from "../COMP.SE.200-2022-2023-1-main/src/add.js"

const expect = chai.expect

describe("Add", () => {
    it("Normal operation test", () =>{
        expect(add(5,5)).to.equal(10)
    });
    it("Negative numbers", () =>{
        expect(add(5,-6)).to.equal(-1)
    });
    it("Normal operation test 1", () =>{
        expect(add(-5,-5)).to.equal(-10)
    });
    it("Normal operation test 1", () =>{
        expect(add(5,0)).to.equal(5)
    });
})