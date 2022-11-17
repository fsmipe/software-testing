// Joona
import chai from 'chai'
import words from "../COMP.SE.200-2022-2023-1-main/src/words.js"
const expect = chai.expect

describe("words", () => {
    it("Testing simple string with spaces", () =>{
        const arr = words("Mikko Markku Maria")
        expect(arr).to.eql(["Mikko", "Markku", "Maria"])
    });

    it("Testing simple string with different dividers", () =>{
        const arr = words("Mikko;., ;Markku-;? !Maria''^")
        expect(arr).to.eql(["Mikko", "Markku", "Maria"])
    });
})