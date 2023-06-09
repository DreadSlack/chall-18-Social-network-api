const {Thought, User} = require('../models');

module.exports = {
    collectThought(req, res){
        Thought.find().then((thoughts) => res.json(thoguths)).catch((err) => res.status(500).json(err));
    },
    congregateThought(req, res){
        Thought.create(req.body).then((thoguth) => {
            //Implement a user ID that can used for vallidation
        })
    },
    //add in the ability to delete a thought that was placed by the user
    //add in the abliity to update thoughts as post their original posting
}