// Joona
import chai from 'chai'
import filter from "../COMP.SE.200-2022-2023-1-main/src/filter.js"
const expect = chai.expect

describe("filter", () => {
    it("Filter with simple example", () =>{
        let users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred', 'active': false }
        ];
        let arr = filter(users, ({ active }) => active);
        expect(arr).to.eql([{ 'user': 'barney', 'active': true }]);
    });

    it("Filtering products in stock", () =>{
        let products = [
            { 'product': 'Omena', 'in_stock': 60 },
            { 'product': 'Kurkku', 'in_stock': 0 },
            { 'product': 'Tomaatti', 'in_stock': 5 }
        ];
        let arr = filter(products, ({ in_stock }) => in_stock > 0);
        expect(arr).to.eql([
            { 'product': 'Omena', 'in_stock': 60 },
            { 'product': 'Tomaatti', 'in_stock': 5 }
        ]);
    });


})