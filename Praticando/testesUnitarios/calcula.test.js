const soma = require("./calcula.js")
describe("funções matemáticas",()=>{
    it("soma 2 números",()=>{
        expect(soma(2,3)).toBe(5)
    })
})
