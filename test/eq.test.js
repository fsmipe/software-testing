// Joona
import chai from 'chai'
import eq from "../COMP.SE.200-2022-2023-1-main/src/eq.js"
const expect = chai.expect

describe("eq", () => {
    it("Compare identical numbers", () =>{
        expect(eq(3, 3)).to.equal(true);
    });

    it("Compare different numbers", () =>{
        expect(eq(3, 56)).to.equal(false);
    });

    it("Compare identical strings", () =>{
        expect(eq("mikko", "mikko")).to.equal(true);
    });

    it("Compare different string", () =>{
        expect(eq("mikko", "maria")).to.equal(false);
    });

    it("Compare different types", () =>{
        expect(eq(undefined, true)).to.equal(false);
    });

});