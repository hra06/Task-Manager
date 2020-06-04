const express = require('express');
const app = express();
const port = 8000;

app.set('views','views');
app.set('view engine','ejs');

app.listen(port,(err)=>{
    if(err){
        console.log('There is an error while making server online');
        return;
    }
    console.log(`Server is up and ruuning on port: ${port}`);
})