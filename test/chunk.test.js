// Mikael
import chai from "chai"
import chunk from "../COMP.SE.200-2022-2023-1-main/src/chunk.js";
const expect = chai.expect


describe("chunkyboi", () => {
    it("Basic empty vector", () =>{
        expect(chunk([])).to.eql([]);
    });
    /**
    it("Normal value test with 1 chunk", () =>{
        var product = ["Cucumber", "Tomatoe", "Pineapple", "Apple", "Pen"];
        var productChunks = chunk(product);
        expect(productChunks).to.deep.equal([["Cucumber", "Tomatoe", "Pineapple", "Apple", "Pen"]]);
    });
    it("Normal value test with 1 chunk", () =>{
        let product = ["Cucumber", "Tomatoe", "Pineapple", "Apple", "Pen"];
        expect(chunk(product, "3")).to.deep.eql([["Cucumber", "Tomatoe", "Pineapple", "Apple", "Pen"]])
    });
    it("Normal value tests", () =>{
        let product = ["Cucumber", "Tomatoe", "Pineapple", "Apple", "Pen"];
        expect(chunk(product, 2)).to.eql([["Cucumber", "Tomatoe"], ["Pineapple", "Apple"], ["Pen"]])
    });
    it("Normal value test with 1 chunk", () =>{
        let product = ["Cucumber", "Tomatoe", "Pineapple", "Apple", "Pen"];
        expect(chunk(product, "not an int")).to.deep.eq([["Cucumber", "Tomatoe", "Pineapple", "Apple", "Pen"]])
    });
    it("1", () =>{
        let product = ["a", "b", "c", "d"];
        expect(chunk(product, 2)).to.eql([["a", "b"], ["c", "d"]])
    });
    it("2", () =>{
        let product = ["a", "b", "c", "d"];
        expect(chunk(product, 3)).to.eql([["a", "b", "c"], ["d"]])
    });
    */
})