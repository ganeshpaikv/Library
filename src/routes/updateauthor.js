// const express = require('express');
// const updateauthorrouter = express.Router();
// const ad = require('../model/authordata');  
// const multer = require('multer');
// var path = require('path');

// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//       cb(null, '/home/ganesh/Desktop/Node/Assignment-Library App copy1/public/images')
//   },
//   filename: (req, file, cb) => {
//       cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname));
//   }
// });
// // 


// function updateaurouter(nav)
// {
    
// //   updateauthorrouter.post('/:id/update',(req,res)=>{
// //     var upload = multer({ storage: storage }).single('image');
// //     // const id = req.params.id;
 
    

// //     upload(req, res, function(err) {
  
// //       if (!req.file) {
// //          console.log('Please select an image to upload');
// //      }
// //      // else if (err instanceof multer.MulterError) {
// //      //     return res.send(err);
// //      // }
// //      else if (err) {
// //        console.log(err);
// //      }
// //    else{
// //           var id = req.params.id;
// //          var item = {
       
// //          name: req.body.name,
// //          work: req.body.work,
// //          genre: req.body.genre,
// //          image: req.file.filename
// //          }
// //        }
   
// //     ad.findByIdAndUpdate(id,item, function (err, docs) {
// //     if (err){
// //         console.log(err)
// //     }
// //     else{
// //         console.log("Updated User : ", docs);
        
// //     }
// //     res.redirect('/authors');
// //   });
// // });
// // });
       














//     // updateauthorrouter.get('/',function(req,res){
//     //   res.render("updateauthor",
//     //   {
//     //     nav,
//     //       title: 'Edit An Author',
          
//     //     });
//     // });

//     // updateauthorrouter.get('/:id',function(req,res){

//     //   const id = req.params.id
//     //   ad.findOne({_id:id})
//     //   .then(function(author){
//     //     res.render('updateauthor',{
//     //       nav,
//     //         title: 'Edit Author',
//     //         author
      
//     //     });
//     //   })
     
//     // });
    
    
    
    
    
    
    
 
   
//     return updateauthorrouter;
// }

//     module.exports = updateaurouter;