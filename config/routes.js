const numbers = require('../api/numbers')

const getNumber = (req, res) => {
    const birthdate = req.body.birthdate
    const result = numbers.getNumber(birthdate)

    res.json({
        number: result
    })
}

module.exports = app => {
    app.get("/", (req, res) => res.send("Hello"))
    app.post("/numbers", getNumber)
}