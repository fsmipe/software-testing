// Mikael
import chai from 'chai'
import capitalize from "../COMP.SE.200-2022-2023-1-main/src/capitalize.js"

const expect = chai.expect

describe("capitalize", () => {
    it("Normal operation test 1", () =>{
        const string = capitalize("HAHA")
        expect(string).to.equal("Haha")
    });
    it("Normal operation test 2", () =>{
        const string = capitalize("haha")
        expect(string).to.equal("Haha")
    });
    it("Number test", () =>{
        const string = capitalize("2 items")
        expect(string).to.equal("2 items")
    });
    it("Symbol test", () =>{
        const string = capitalize("~")
        expect(string).to.equal("~")
    });
    it("Array/Object test", () =>{
        const string = capitalize(["ArrayException"])
        expect(string).to.equal("Arrayexception")
    });
    it("Empty string", () =>{
        const string = capitalize("")
        expect(string).to.equal("")
    });
})