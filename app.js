const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const ejs = require("ejs")


const app = express()


app.set("view engine","ejs")
app.set("views","views")

app.use(express.static(path.join(__dirname,'PUBLIC')))
app.use(bodyParser.urlencoded({ extended: false }))


app.listen(6969)
