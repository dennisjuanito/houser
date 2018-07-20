const express = require("express");
const massive = require("massive");
const bodyParser = require("body-parser");
const controller = require("./controller.js")
require("dotenv").config();






const app = express();
// top level middle ware
app.use(bodyParser.json());




// request level middleware
// endpoints
 


// make sure to connect to massive first before conencing the app listening
massive(process.env.CONNECTING_STRING).then(connection => {
    app.set("db", connection);
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`you are in the port${process.env.SERVER_PORT}`)
    })
})

