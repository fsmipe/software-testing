var chai = require("chai")
const add = import ("../COMP.SE.200-2022-2023-1/src/add.js")
// import add from "../COMP.SE.200-2022-2023-1/src/add.js"

const expect = chai.expect


describe("Add", () => {
    it("adds positive number to positive number", () =>{
        expect(add(5,5)).to.equal(10)
    });
})