import chai from 'chai'
import isEmpty from "../COMP.SE.200-2022-2023-1-main/src/isEmpty.js"
const expect = chai.expect


describe("isEmpty", () => {
    it("atleast this is a function", () =>{
        expect(isEmpty(null)).to.equal(true)
    });
})