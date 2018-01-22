const express = require("express")
const customerDB = require("../model/customer-db-mongoose");
const Customer = require("../model/customer");

const router = express.Router();


router.get("/customer", (req, res) => {
    customerDB.GetAllCustomer((result) => {
        res.send(result);
    });
})

router.get("/customer/:id", (req, res) => {
    customerDB.GetCustomerById(req.params.id, (result) => {
        res.send(result);
    });
})

router.post("/customer", (req, res) => {

    let obj = new Customer(req.body.name,
                        req.body.address
                      );

    customerDB.AddNewCustomer(obj, function (result){
        res.send(result);
    });

})

router.put("/customer", (req, res) => {
    let newObj = new Customer(req.body.title,
        req.body.name,
        req.body.phone,
      );

    customerDB.UpdateCustomer(req.body._id, newObj, (result)=>{
        res.send(result);
    })
})

router.delete("/customer/:id", (req, res) => {
    customerDB.DeleteCustomer(req.params.id, (result) => {
        res.send(result);
    })
})


module.exports = (function(){
    return router;
})();
