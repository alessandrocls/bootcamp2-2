const House = require("../model/house-mongoose");

var AddNewHouse = (obj, callback) => {

    let newObj = new House(obj);

    newObj.save((error) => {
        if(error) throw error;
        callback(newObj);
    });

}

var GetHouseById = (id, callback) => {

    House.findById(id, (error, result) => {
        if(error) throw error;
        callback(result);
    });

}

var GetAllHouse = (callback) => {
    House.find({}, (error, result) => {
        if(error) throw error;
        callback(result);
    });
}

var DeleteHouse = (id, callback) => {
    House.findByIdAndRemove(id, (error) => {
        if(error) throw error;
        callback("House Deleted !")
    });
}

var UpdateHouse = (id, newObj, callback) => {


    House.findByIdAndUpdate(id, newObj, (error, result)=>{
        if(error) throw error;
        callback(result);
    });

}

module.exports = {
    AddNewHouse,
    GetHouseById,
    GetAllHouse,
    DeleteHouse,
    UpdateHouse
}
