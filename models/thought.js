const { Schema, model} = require('mongoose');

const thoughtsSchema = new Schema({
    thoughts: {
        type: String,
        minLength: 10,
        maxLength: 225,
    },
});

const Thought = model('thought', thoughtsSchema);
module.exports = Thought;