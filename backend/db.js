const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/meanDB',(err)=>{
    if(!err){
        console.log("DB Connectin Successful");
    }else{
        console.log("DB Connection Error" + err);
    }
});

module.exports = mongoose;