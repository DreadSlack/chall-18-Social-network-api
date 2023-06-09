const {Schema, model} = require('mongoose');

const usersSchema = new Schema({
    name:{
        type: String,
        minLength: 2,
        maxLength: 15,
    },
    //add some kind of ID for vallidation with later steps within the api controllers
});

const User = model('user', usersSchema);
module.exports = User;
