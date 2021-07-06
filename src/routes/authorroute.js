const express = require('express');
const authrouter = express.Router();
const authordata = require('../model/authordata');

function router1(nav)
{

  //  authrouter.get('/',function(req,res){
  //     authordata.find()
  //     .then(function(authors){
  //       res.render("authors",
  //       {
  //         nav,
  //           title: 'Authors',
  //           authors
  //         });
  //     })
    
  //   });
    // authrouter.post('/update',function(req,res){
    //   var id = req.body.id;
    //   var item ={ 

      
    //       name: req.body.name,
    //       work: req.body.work,
    //       genre: req.body.genre,
    //       image: req.body.image
    //       };
    //   authordata.updateOne(req.params.id)
    //   .then(function(authors){
    //     res.render("newauthor",
    //   {
      
  
    //     nav,
    //       title: 'Add New Author',
          
    //     });
    //   })
    
    // });
    


    // authrouter.get('/delete/:id',function(req,res){
    //   const id = req.params.id;
    //   authordata.deleteOne({_id:id})
    //   .then(function(author){
    //     res.render('deleteauthor',{
    //       nav,
    //         title: 'Deleted Successfully',
    //         author
      
    //     });
    //   })
     
    // });
    




    authrouter.get('/:id',function(req,res){
        
      const id = req.params.id
      authordata.findOne({_id:id})
      .then(function(author){
        res.render('author',{
            nav,
              title: 'Author',
              author
        
          });
      })
      
    });

    return authrouter;
}

    module.exports = router1;


