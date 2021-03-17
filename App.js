const express = require('express');
const Approuter = require('./Router/route');
let port = process.env.PORT || 5656;
const app = express();
const mongoose = require('mongoose');
const bodyparser  = require('body-parser');
app.use(bodyparser.json());

// Handling CORS = cross Origin resources sharing Issue  this is allow to access the code anywhere
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  })
  
  

  // app.use call Approuter  model when directories is root
  app.use('/', Approuter);
  

// Here mongoose.connect is method/function which is used to make database connection

  mongoose.connect('mongodb+srv://root:kumar@123@cluster0.xkrjd.mongodb.net/onlinefood?retryWrites=true&w=majority',
  {useNewUrlParser:true,useUnifiedTopology:true})
  
  // .then function is here sending response backe
       .then(res =>{

        // app.listen function use to run express project on port no 5656 in app.listen listen is function
          app.listen(port, ()=> {
          console.log("server is runing on" +" " + port);
         })
       })
// .catch function is used to error

      .catch(err=>console.log(err))