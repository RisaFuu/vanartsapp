const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const PORT = 5000;

//configure to my sql database
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'vanartsapp',
    port:8889

});

//connect to database
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("my sql database connected");
});

global.db = db;

app.set('port',process.env.port || PORT);
app.set('views',__dirname+'/views');

app.listen(PORT,()=>{
    console.log(`The sever is running on localhost:5000:${PORT}`);
})