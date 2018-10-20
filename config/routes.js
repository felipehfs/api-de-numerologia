const numbers = require('../api/numbers')

const getNumber = (req, res) => {
    const birthdate = req.body.birthdate
    const result = numbers.getNumber(birthdate)

    res.json({
        number: result
    })
}

module.exports = app => {
    app.get("/", (req, res) => res.sendFile("index.html"))
    
    app.get("/numbers/:number", (req, res) => {
        const number = numbers.getDescription(req.params.number)
        res.json(number)
    })
    app.post("/numbers", getNumber)
}