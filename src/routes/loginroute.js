

const { query } = require('express');
const express = require('express');
 const loginrouter = express.Router();
const sd = require('../model/signupdata');  
// const ud = require('../model/userdata');  

function setUser(req, res, next) {
  const userId = req.body.email
  if (userId) {
    req.user = users.find(user => user.id === userId)
  }
  next()
}

function logrouter(navhome)
{


// var signup = [
//     {
//         username : '',
//         password : '',
//         confirmpassword : '',
      
//     }
    
    
//     ]
    
   loginrouter.get('/',function(req,res){
      res.render("login",
      {
        navhome,
          title: 'Login',
         
        });
    });



    loginrouter.post('/add',function(req,res){

      var name = req.body.email;
      var password = req.body.pwd;
      var queryq = {name: name, password: password};

      var item ={

      
      name: req.body.email,
      password: req.body.pwd
      
      }

    

       sd.findOne(queryq,function(err,user) {

        if(err) throw new Error(err);
        if(!user) 
          res.send('Invalid Credentials');
        else {
          console.log('Found!');
          if(name=='admin@abc.com'){
            res.redirect('/admin/books');
          }
          else{
            res.redirect('/user/books');
          }
          
        }
    //     if(err) {
    //       console.log('Server Error');
    //    }
    //     if(Boolean(user)) {
    //   //     // res.send('E-mail already in use!! Please Login');

    //    sd.findOne({password:password},function(err,user) {
    //             if(err) {
    //              console.log('Server Error');
    //            }
    //           if(Boolean(user)) {
    //   //           var user =  ud(item);
    //   //           user.save();
    //   //           res.redirect('/books');

   
    //   //            });
           });
    //     }
    //   //           //  res.send('E-mail already in use!! Please Login');
    //   //       //     // res.redirect('/Login');
    //   //       //   }
    //   //       //   else{


    });
          
    //   //   });
    //    });

    //     // sd.findOne({name:name},function(err,user) {
    //     //   if(err) {
    //     //     console.log('Server Error');
    //     //   }
    //     //   if(Boolean(user)) {
    //     //     res.send('E-mail already in use!! Please Login');
    //     //     // res.redirect('/Login');
    //     //   }
    //     //   else{

          
    //     //   var user =  sd(item);
    //     //   user.save();
    //     //   res.redirect('/login');
     

    //     //   }

    //     // });

    // });
   
    

    return loginrouter;
}

    module.exports = logrouter;