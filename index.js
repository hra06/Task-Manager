const express = require('express');
const app = express();
const port = 7000;

const db = require('./config/mongoose')

const Task = require('./models/tasks');

app.set('views','views');
app.set('view engine','ejs');
app.use(express.urlencoded());
app.use(express.static('assets'));

app.use('/',require('./routes/index'))

app.listen(port,(err)=>{
    if(err){
        console.log('There is an error while making server online');
        return;
    }
    console.log(`Server is up and ruuning on port: ${port}`);
})