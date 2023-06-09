const User = require('../models/User');
 module.exports = {
    findUsers(req, res){
        User.find().then((users) => res.json(users)).catch((err) => res.status(500).json(err));
    },
    makeNewUser(req, res){
        User.create(req.body).then((userData) => res.json(userData)).catch((err) => res.status.json(err));
    },
 };
