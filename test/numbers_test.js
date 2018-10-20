const assert = require('assert')
const numbers = require("../api/numbers")

describe("api/numbers", () => {
    describe("#getNumber", () => {
        it("Should return 8", () => {
            assert.equal(numbers.getNumber("30/03/1982"), 8)
        })

        it(" 15 de março (mês 3) de 1985- should return 5", function(){
            assert.equal(numbers.getNumber("15/03/1985"), 5)
        })
    })
})