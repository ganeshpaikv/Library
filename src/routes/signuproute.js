const express = require('express');
const signuprouter = express.Router();
const sd = require('../model/signupdata');  
passport = require("passport");
LocalStrategy = require("passport-local");
passportLocalMongoose = require("passport-local-mongoose");

function signrouter(navhome)
{


// var signup = [
//     {
//         username : '',
//         password : '',
//         confirmpassword : '',
      
//     }
    
    
//     ]
    
   signuprouter.get('/',function(req,res){
      res.render("signup",
      {
        navhome,
          title: 'Sign-in',
         
        });
    });
    signuprouter.post('/add',function(req,res){

      var name = req.body.un;

      var item = {
      
      name: req.body.un,
      mobile: req.body.mob,
      password: req.body.passwd,
      cpassword: req.body.cpasswd
                }
                

                sd.findOne({name:name},function(err,user) {
                  if(err) {
                    console.log('Server Error');
                  }
                  if(Boolean(user)) {
                    res.send('E-mail already in use!! Please Login');
                    // res.redirect('/Login');
                  }
                  else{

                  
                  var user =  sd(item);
                  user.save();
                  res.redirect('/login');
             

                  }

                });
            

    
   
    });

  //   app.post("/register", function (req, res) {
  //     var username = req.body.username
  //     var password = req.body.password
  //     User.register(new User({ username: username }),
  //             password, function (err, user) {
  //         if (err) {
  //             console.log(err);
  //             return res.render("register");
  //         }
   
  //         passport.authenticate("local")(
  //             req, res, function () {
  //             res.render("secret");
  //         });
  //     });
  // });










    return signuprouter;
}

    module.exports = signrouter;