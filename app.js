const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/db');

const PORT = process.env.PORT || 8080;


//require routers
const index = require('./routes/index');
const wine = require('./routes/wine');

//connect to database
mongoose.connect(config.dbCon, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to mongodb');
});


// init our app 
const app = express();

//set up views folder
app.set('views', 'views');
 //view engine
 app.set('view engine', 'ejs');
//set up static folder
app.use(express.static('public'));

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//routes
app.use('/', index);
app.use('/wine', wine);

app.listen(PORT, () => {
    console.log('app is listening on port', PORT);
});




