var chai = require("chai");
const { default: capitalize } = import("../COMP.SE.200-2022-2023-1/src/capitalize.js");
// import add from "../COMP.SE.200-2022-2023-1/src/add.js"

const expect = chai.expect


describe("capitalize", () => {
    it("please work :::Ddd", () =>{
        const string = capitalize("HAHA")
        expect(string).to.equal("Haha")
    });
})