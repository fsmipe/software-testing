// Mikael
import chai from 'chai'
import isEmpty from "../COMP.SE.200-2022-2023-1-main/src/isEmpty.js"
const expect = chai.expect


describe("isEmpty", () => {
    it("Basic null value", () =>{
        expect(isEmpty(null)).to.equal(true)
    });
    it("Empty string", () =>{
        expect(isEmpty('')).to.equal(true)
    });
    it("Empty set", () =>{
        expect(isEmpty([])).to.equal(true)
    });
    it("Normal map", () =>{
        let products = [
            { 'product': 'Omena', 'in_stock': 60 },
            { 'product': 'Kurkku', 'in_stock': 0 },
            { 'product': 'Tomaatti', 'in_stock': 5 }
        ];
        expect(isEmpty(products)).to.equal(false)
    });
    /**
    it("Empty map", () => {
        let users = [{}];
        expect(isEmpty(users)).to.equal(true)
    });
     */
    it("Normal object", () => {
        const user = {
            firstName: "John",
            lastName: "Smith",
            storeName: "Whole Foods Inc."
          };
        expect(isEmpty(user)).to.equal(false)
    });
    it("Empty object", () => {
        const user = {};
        expect(isEmpty(user)).to.equal(true)
    });
})