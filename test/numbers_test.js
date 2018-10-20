const assert = require('assert')
const numbers = require("../api/numbers")

describe("api/numbers", () => {
    describe("#getNumber", () => {
        it("Should return 8", () => {
            assert.equal(numbers.getNumber("30/03/1982"), 8)
        })
    })
})