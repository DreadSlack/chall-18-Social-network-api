const connection = require('../config/connection');
const { User, Thought } = require('../models');
const {genoratedNames, genoratedThoughts} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () =>{
    console.log('Connection good');
    await User.deleteMany({});
    await Thought.deleteMany({});
    const users = genoratedNames(8);
    const thoughts = genoratedThoughts(8);
    await User.collection.insetMany(users);
    await Thought.collection.insertMany(thoughts);
    console.table(users);
    console.table(thoughts);
    console.info('Action Complete');
    process.exit(0);
});
