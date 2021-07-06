// const express = require('express');
// const newauthorrouter = express.Router();
// const ad = require('../model/authordata');  
// const multer = require('multer');
// const GridFsStorage = require("multer-gridfs-storage");
// var fs = require('fs');
// var path = require('path');

// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//       cb(null, '/home/ganesh/Desktop/Node/Assignment-Library App copy1/public/images')
//   },
//   filename: (req, file, cb) => {
//       cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname));
//   }
// });


// function newarouter(nav)
// {

//     // newauthorrouter.get('/',function(req,res){
//     //   res.render("newauthor",
//     //   {
//     //     nav,
//     //       title: 'Add New Author',
          
//     //     });
//     // });

// // 
    
//     // newauthorrouter.post('/add',function(req,res){
//     //   var upload = multer({ storage: storage }).single('image');
      
//     //   upload(req, res, function(err) {
        
//     //      if (!req.file) {
//     //         console.log('Please select an image to upload');
//     //     }
//     //     // else if (err instanceof multer.MulterError) {
//     //     //     return res.send(err);
//     //     // }
//     //     else if (err) {
//     //       console.log(err);
//     //     }
//     //   else{
       
//     //         var item ={
          
//     //         name: req.body.name,
//     //         work : req.body.work,
//     //         genre: req.body.genre,
//     //         image: req.file.filename
//     //         }
//     //       }
//     //       // {
//     //       // //     data: fs.readFileSync('/home/ganesh/Desktop/Node/Assignment-Library App copy1' + '/public/images/' + req.file.filename),
//     //       // //     contentType: 'image/png'
//     //       // // }
//     //       //   }
//     //         // bd.create(item);
//     //        var author =  ad(item);
            
//     //        author.save();
           
           
//     //        res.redirect('/authors');
      
         
//     //       });
         
//     //     });
      
      
   
    
//     return newauthorrouter;
// }

//     module.exports = newarouter;