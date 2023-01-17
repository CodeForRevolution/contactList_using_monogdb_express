const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/contactListDB');
const db=mongoose.connection;


db.on('error',console.error.bind(console,'error connection to db'));
db.once('open',function(){
    console.log("*****sucessfully conected to database******");

});
