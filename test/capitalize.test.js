import chai from 'chai'
import capitalize from "../COMP.SE.200-2022-2023-1-main/src/capitalize.js"

const expect = chai.expect


describe("capitalize", () => {
    it("please work :::Ddd", () =>{
        const string = capitalize("HAHA")
        expect(string).to.equal("Haha")
    });
})