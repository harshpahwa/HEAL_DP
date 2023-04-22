const express = require('express');

const port = 8000;
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); 
// use express router
app.use('/', require('./routes'));
// set up the view engine
const test = require('dotenv').config()

app.set('view engine', 'ejs');
app.set('views', './views');

console.log(process.env.USER)

app.use(express.static(__dirname + '/assets'));
app.listen(process.env.PORT || port,function(err){
    if(err){
        console.log(`Error encountered in running the server: ${err}`);
        //interpolation string
        return;
    }
    console.log(`Server is running on port: ${port}`);
});
