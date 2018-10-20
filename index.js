const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./config/routes')


app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

routes(app)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Running http://localhost:${PORT}`))