const express = require('express');
const newbookrouter = express.Router();
const bd = require('../model/bookdata');  
const GridFsStorage = require("multer-gridfs-storage");

var fs = require('fs');
var path = require('path');
var multer = require('multer');
// var imgModel = require('./model');
 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/home/ganesh/Desktop/Node/Assignment-Library App copy1/public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname));
    }
});
 

 
// var upload = multer({ storage: storage })
function newbrouter(nav)
{

    // newbookrouter.get('/',function(req,res){
    //   res.render("newbook",
    //   {
    //     nav,
    //       title: 'Add New Book',
          
    //     });
    // });


//     newbookrouter.post('/add',function(req,res) {

// var upload = multer({ storage: storage }).single('imageq');
      
// upload(req, res, function(err) {
  
//    if (!req.file) {
//       console.log('Please select an image to upload');
//   }
//   // else if (err instanceof multer.MulterError) {
//   //     return res.send(err);
//   // }
//   else if (err) {
//     console.log(err);
//   }
// else{
 
//       var item ={
    
//       title: req.body.title,
//       author: req.body.author,
//       genre: req.body.genre,
//       image: req.file.filename
//       }
//     }
//     // {
//     // //     data: fs.readFileSync('/home/ganesh/Desktop/Node/Assignment-Library App copy1' + '/public/images/' + req.file.filename),
//     // //     contentType: 'image/png'
//     // // }
//     //   }
//       // bd.create(item);
//      var book =  bd(item);
      
//      book.save();
     
     
//      res.redirect('/books');

   
//     });
   
//   });


    newbookrouter.put('/update',function(req,res){
    

      const {id} = req.params
      const {title} = req.body.title
      const {author} = req.body.author
      const {genre} = req.body.genre
      const {image} = req.body.image
      
      
     res.redirect('/books')

   
    });
    
    return newbookrouter;
}

    module.exports = newbrouter;