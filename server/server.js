express = require('express'); // You can http routes get post 
morgan = require('morgan');  // http logger for nodejs
bodyParser = require('body-parser'); // Data reading parse json data, nodejs cannot communicate with frontend data
mongoose = require('mongoose');
const cors = require('cors');

const config = require('./config');
const app = express();

mongoose.connect(config.database, err => {  // function to communicate directly with mongo database
    if(err) {
        console.log(err);
    } else {
        console.log('Connected to the database');
    }
});

app.use(bodyParser.json()); // reading data in specific format 
app.use(bodyParser.urlencoded({extended: false}));  // set it false in order to read specialy images, all sort of data types
app.use(morgan('dev'));


app.get('/', (req, res, next) => {
    res.json ({
        name : "Zakaria"
    })
})

app.listen(config.port, (err) => {
    console.log("Magic happens on port " + config.port);   // sometimes 'nodemon not recognized' is path problem should add environmenet variable
})
