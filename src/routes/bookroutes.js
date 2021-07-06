const express = require('express');
const bookrouter = express.Router();
const bookdata = require('../model/bookdata');


function router(nav)
{

    // bookrouter.get('/',function(req,res){
    //   // console.log(__dirname);
    //   bookdata.find()
    //   .then(function(books){



    //     res.render("books",
    //     {
    //       nav,
    //         title: 'Books',
    //         books
    //       }); 
    //   })
      
    // });
    
    // bookrouter.get('/:id',function(req,res){

    //   const id = req.params.id
    //   bookdata.findOne({_id:id})
    //   .then(function(book){
    //     res.render('book',{
    //       nav,
    //         title: 'Book',
    //         book
      
    //     });
    //   })
     
    // });

    // bookrouter.get('/delete/:id',function(req,res){
    //   const id = req.params.id;
    //   bookdata.deleteOne({_id:id})
    //   .then(function(book){
    //     res.render('deletebook',{
    //       nav,
    //         title: 'Deleted Successfully',
    //         book
      
    //     });
    //   })
     
    // });
  
            
    

  
    // bookrouter.get('/newbook',function(req,res){

    //   const id = req.params.id
    //   bookdata.findOne({_id:id})
    //   .then(function(book){
    //     res.render('newbook',{
    //       nav,
    //         title: 'Book',
    //         book
      
    //     });
    //   })
     
    // });

   
      
   
    return bookrouter;
}

    module.exports = router;