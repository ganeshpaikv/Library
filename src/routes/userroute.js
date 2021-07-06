const express = require('express');
const userrouter = express.Router();
const bookdata = require('../model/bookdata');
const authordata = require('../model/authordata');
function router(nav)
{
  // userrouter.get('/userhome',function(req,res){

  //   res.render("home",
  //   {
  //     navbar,
  //     title: 'Welcome to Library'
  //   });
  // });
  
    userrouter.get('/books',function(req,res){
      // console.log(__dirname);
      bookdata.find()
      .then(function(books){



        res.render("books",
        {
          // nav: [{link:'/books', name:'Books'},{link:'/authors', name: 'Authors'},{link:'/login', name: 'Logout'}];
           nav:[{link:'/books', name:'Books'},{link:'/user/authors', name: 'Authors'},{link:'/login', name: 'Logout'}],
          title: 'Books',
            books
          }); 
      })
      
    });
    
    userrouter.get('/books/:id',function(req,res){

      const id = req.params.id
      bookdata.findOne({_id:id})
      .then(function(book){
        res.render('book',{
          nav:[{link:'/books', name:'Books'},{link:'/user/authors', name: 'Authors'},{link:'/login', name: 'Logout'}],
            title: 'Book',
            book
      
        });
      })
     
    });

    userrouter.get('/authors',function(req,res){
      authordata.find()
      .then(function(authors){
        res.render("authors",
        {
          nav:[{link:'/user/books', name:'Books'},{link:'/authors', name: 'Authors'},{link:'/login', name: 'Logout'}],
            title: 'Authors',
            authors
          });
      })
    
    });

    userrouter.get('/authors/:id',function(req,res){
        
      const id = req.params.id
      authordata.findOne({_id:id})
      .then(function(author){
        res.render('author',{
          nav:[{link:'/user/books', name:'Books'},{link:'/authors', name: 'Authors'},{link:'/login', name: 'Logout'}],
              title: 'Author',
              author
        
          });
      })
      
    });
    // userrouter.post('/update',function(req,res){
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
    


    // userrouter.get('/delete/:id',function(req,res){
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
    




    // userrouter.get('/:id',function(req,res){
        
    //   const id = req.params.id
    //   authordata.findOne({_id:id})
    //   .then(function(autconst authordata = require('../model/authordata');hor){
    //     res.render('author',{
    //         nav,
    //           title: 'Author',
    //           author
        
    //       });
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

   
      
   
    return userrouter;
}

    module.exports = router;


