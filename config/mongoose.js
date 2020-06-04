const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/task_manager_db');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to databse'));

db.once('open',function(){
    console.log('successfully connected to database');
});