// Mikael
import chai from 'chai'
import add from "../COMP.SE.200-2022-2023-1-main/src/add.js"

const expect = chai.expect

describe("Add", () => {
    it("Adding 2 positive numbers together", () =>{
        expect(add(5,5)).to.equal(10)
    });
    it("Adding positive and negative numbers together", () =>{
        expect(add(5,-6)).to.equal(-1)
    });
    it("Adding 2 negative numbers together", () =>{
        expect(add(-5,-5)).to.equal(-10)
    });
    it("Adding to zero positive value", () =>{
        expect(add(5,0)).to.equal(5)
    });
    it("Adding to zero negative value", () =>{
        expect(add(-5,0)).to.equal(-5)
    });
    it("Adding 2 zeros together", () =>{
        expect(add(0,0)).to.equal(0)
    });
    it("Number as null", () =>{
        expect(add(5,null)).to.equal(5)
    });
})