import chai from 'chai'
import add from "../COMP.SE.200-2022-2023-1-main/src/add.js"


const expect = chai.expect


describe("Add", () => {
    it("adds positive number to positive number", () =>{
        expect(add(5,5)).to.equal(10)
    });
})