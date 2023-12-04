const {soma} = require('./calcula');
describe("funções matemáticas",()=>{

    it('soma 2 números',()=>{
    expect(soma(1,2)).toBe(3)
})
    it('soma 2 números',()=>{
    expect(soma(1,2)).toBe(4)
})
})

