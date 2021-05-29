

const express = require('express');
const loginrouter = express.Router();

function logrouter(nav)
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
        nav,
          title: 'Log-in',
         
        });
    });
    

    return loginrouter;
}

    module.exports = logrouter;