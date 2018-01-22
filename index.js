const express = require("express");
const bodyParser = require("body-parser");
const houseController = require("./controller/house-controller")
const customerController = require('./controller/customer-controller')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use("/api", houseController)
app.use('/api', customerController)

app.listen(3001);
