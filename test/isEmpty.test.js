var chai = require("chai");
const { default: isEmpty } = import("../COMP.SE.200-2022-2023-1/src/isEmpty");


const expect = chai.expect


describe("isEmpty", () => {
    it("atleast this is a function", () =>{
        expect(isEmpty(null)).to.equal(true)
    });
})