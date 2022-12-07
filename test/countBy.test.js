// Joona
import chai from 'chai'
import countBy from "../COMP.SE.200-2022-2023-1-main/src/countBy.js"
const expect = chai.expect

describe("countBy", () => {
    let customers = [
        { 'user': 'Jarkko', 'active': true },
        { 'user': 'Mikko', 'active': true },
        { 'user': 'Markus', 'active': true },
        { 'user': 'Marjatta', 'active': true },
        { 'user': 'Jonna', 'active': false },
        { 'user': 'Mikaela-Marjatta-Mikonpoika-Mollivoittoinen', 'active': false }
    ];

    it("Count by simple value", () =>{
        let online = countBy(customers, value => value.active);
        expect(online).to.eql({'true': 4, 'false': 2});
    });
    /*
    it("Temporary test to go around the bug", () =>{
        let online = countBy(customers, value => value.active);
        expect(online).to.eql({'true': 3, 'false': 1});
    });*/
})