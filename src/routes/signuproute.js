

const express = require('express');
const signuprouter = express.Router();

function signrouter(nav)
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
        nav,
          title: 'Sign-in',
         
        });
    });
    

    return signuprouter;
}

    module.exports = signrouter;