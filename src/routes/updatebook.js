// const express = require('express');
// const updatebookrouter = express.Router();
// const bd = require('../model/bookdata');  

// var path = require('path');
// var multer = require('multer');
// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//       cb(null, '/home/ganesh/Desktop/Node/Assignment-Library App copy1/public/images')
//   },
//   filename: (req, file, cb) => {
//       cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname));
//   }
// });

// function updatebrouter(nav)
// {

//   updatebookrouter.post('/:id/update',(req,res)=>{
//     var upload = multer({ storage: storage }).single('image');
//     // const id = req.params.id;
 
    

//     upload(req, res, function(err) {
  
//       if (!req.file) {
//          console.log('Please select an image to upload');
//      }
//      // else if (err instanceof multer.MulterError) {
//      //     return res.send(err);
//      // }
//      else if (err) {
//        console.log(err);
//      }
//    else{
//           var id = req.params.id;
//          var item = {
       
//          title: req.body.title,
//          author: req.body.author,
//          genre: req.body.genre,
//          image: req.file.filename
//          }
//        }
   
//     bd.findByIdAndUpdate(id,item, function (err, docs) {
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log("Updated User : ", docs);
        
//     }
//     res.redirect('/books');
//   });
// });
// });
                                
// //    .then(function(book){
// //      console.log("Hi");
// //        res.render("book",
// //       //  {

// //       //   nav,
// //       //   title: 'Book',
// //       //   book
        
        
// //       //  }
       

// //        );
// //    }));
// //  });
// //   });
// // updatebookrouter.get('/:id',function(req,res){

// //   const id = req.params.id;
// //    console.log(id);
// //   bd.findOne({_id:id})
  
// //   .then(function(book){
// //     res.render('updatebook',{
// //       nav,
// //         title: 'Edit Book',
// //         book
        
  
// //     });
// //   })
 
// // });

//        return updatebookrouter;
// }
//     module.exports = updatebrouter;