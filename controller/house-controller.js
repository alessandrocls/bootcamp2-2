const express = require("express")
const houseDB = require("../model/house-db-mongoose");
const House = require("../model/house");

const router = express.Router();


router.get("/house", (req, res) => {
    houseDB.GetAllHouse((result) => {
        res.send(result);
    });
})

router.get("/house/:id", (req, res) => {
    houseDB.GetHouseById(req.params.id, (result) => {
        res.send(result);
    });
})

router.post("/house", (req, res) => {

    let obj = new House(req.body.name,
                        req.body.address
                      );

    houseDB.AddNewHouse(obj, function (result){
        res.send(result);
    });

})

router.put("/house", (req, res) => {
    let newObj = new House(req.body.title,
        req.body.name,
        req.body.address,
        req.body.customer
      );

    houseDB.UpdateHouse(req.body._id, newObj, (result)=>{
        res.send(result);
    })
})

router.delete("/house/:id", (req, res) => {
    houseDB.DeleteHouse(req.params.id, (result) => {
        res.send(result);
    })
})


module.exports = (function(){
    return router;
})();
