const express = require('express');
const adminrouter = express.Router();
const bookdata = require('../model/bookdata');
const authordata = require('../model/authordata');
// const newbookrouter = express.Router();
const bd = require('../model/bookdata');  
const ad = require('../model/authordata');  


const multer = require('multer');
const GridFsStorage = require("multer-gridfs-storage");
var fs = require('fs');
var path = require('path');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, '/home/ganesh/Desktop/Node/Assignment-Library App copy1/public/images')
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname));
  }
});

function router1(nav)
{
// Books
adminrouter.get('/admin',function(req,res){

  res.render("index",
  {
    nav :[{link:'admin/books', name:'Books'},{link:'admin/newbook', name: 'Add a Book'},{link:'admin/authors', name: 'Authors'},{link:'admin/newauthor', name: 'Add an Author'},{link:'/login', name: 'Logout'}] ,
    title: 'Welcome to Library'
  });
});




  



    adminrouter.get('/books',function(req,res){
      // console.log(__dirname);
      bookdata.find()
      .then(function(books){



        res.render("books",
        {
          nav : [{link:'/admin/books', name:'Books'},{link:'/admin/newbook', name: 'Add a Book'},{link:'/admin/authors', name: 'Authors'},{link:'/admin/newauthor', name: 'Add an Author'},{link:'/login', name: 'Logout'}],
            title: 'Books',
            books
          }); 
      })
      
    });
    
    adminrouter.get('/books/:id',function(req,res){

      const id = req.params.id
      bookdata.findOne({_id:id})
      .then(function(book){
        res.render('book',{
          nav : [{link:'/admin/books', name:'Books'},{link:'/admin/newbook', name: 'Add a Book'},{link:'/admin/authors', name: 'Authors'},{link:'/admin/newauthor', name: 'Add an Author'},{link:'/login', name: 'Logout'}],
            title: 'Book',
            book
      
        });
      })
     
    });

    adminrouter.get('/books/delete/:id',function(req,res){
      const id = req.params.id;
      bookdata.deleteOne({_id:id})
      .then(function(book){
        res.render('deletebook',{
          nav : [{link:'/admin/books', name:'Books'},{link:'/admin/newbook', name: 'Add a Book'},{link:'/admin/authors', name: 'Authors'},{link:'/admin/newauthor', name: 'Add an Author'},{link:'/login', name: 'Logout'}],
            title: 'Deleted Successfully',
            book
      
        });
      })
     
    });
  
        // Authors    // 

        adminrouter.get('/authors',function(req,res){
          authordata.find()
          .then(function(authors){
            res.render("authors",
            {
              nav : [{link:'/admin/books', name:'Books'},{link:'/admin/newbook', name: 'Add a Book'},{link:'/admin/authors', name: 'Authors'},{link:'/admin/newauthor', name: 'Add an Author'},{link:'/login', name: 'Logout'}],
              title: 'Authors',
              authors
              });
          })
        
        });
           
    
        adminrouter.get('/authors/delete/:id',function(req,res){
          const id = req.params.id;
          authordata.deleteOne({_id:id})
          .then(function(author){
            res.render('deleteauthor',{
              nav : [{link:'/admin/books', name:'Books'},{link:'/admin/newbook', name: 'Add a Book'},{link:'/admin/authors', name: 'Authors'},{link:'/admin/newauthor', name: 'Add an Author'},{link:'/login', name: 'Logout'}],
              title: 'Author',
              author
          
            });
          })
         
        });
              
             adminrouter.get('/authors/:id',function(req,res){
            
          const id = req.params.id
          authordata.findOne({_id:id})
          .then(function(author){
            res.render('author',{
              nav : [{link:'/admin/books', name:'Books'},{link:'/admin/newbook', name: 'Add a Book'},{link:'/admin/authors', name: 'Authors'},{link:'/admin/newauthor', name: 'Add an Author'},{link:'/login', name: 'Logout'}],
                  title: 'Author',
                  author
            
              });
          })
          
        });


        // new author

        adminrouter.get('/newauthor',function(req,res){
          res.render("newauthor",
          {
            nav : [{link:'/admin/books', name:'Books'},{link:'/admin/newbook', name: 'Add a Book'},{link:'/admin/authors', name: 'Authors'},{link:'/admin/newauthor', name: 'Add an Author'},{link:'/login', name: 'Logout'}],
              title: 'Add New Author',
              
            });
        });
    
    
        
        adminrouter.post('/newauthor/add',function(req,res){
          var upload = multer({ storage: storage }).single('image');
          
          upload(req, res, function(err) {
            
             if (!req.file) {
                console.log('Please select an image to upload');
            }
            // else if (err instanceof multer.MulterError) {
            //     return res.send(err);
            // }
            else if (err) {
              console.log(err);
            }
          else{
           
                var item ={
              
                name: req.body.name,
                work : req.body.work,
                genre: req.body.genre,
                image: req.file.filename
                }
              }
              // {
              // //     data: fs.readFileSync('/home/ganesh/Desktop/Node/Assignment-Library App copy1' + '/public/images/' + req.file.filename),
              // //     contentType: 'image/png'
              // // }
              //   }
                // bd.create(item);
               var author =  ad(item);
                
               author.save();
               
               
               res.redirect('/admin/authors');
          
             
              });
             
            });
          
          // new book

          adminrouter.get('/newbook',function(req,res){
            res.render("newbook",
            {
              nav : [{link:'/admin/books', name:'Books'},{link:'/admin/newbook', name: 'Add a Book'},{link:'/admin/authors', name: 'Authors'},{link:'/admin/newauthor', name: 'Add an Author'},{link:'/login', name: 'Logout'}],
                title: 'Add New Book',
                
              });
          });
      
      
          adminrouter.post('/newbook/add',function(req,res) {
      
      var upload = multer({ storage: storage }).single('imageq');
            
      upload(req, res, function(err) {
        
         if (!req.file) {
            console.log('Please select an image to upload');
        }
        // else if (err instanceof multer.MulterError) {
        //     return res.send(err);
        // }
        else if (err) {
          console.log(err);
        }
      else{
       
            var item ={
          
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.file.filename
            }
          }
          // {
          // //     data: fs.readFileSync('/home/ganesh/Desktop/Node/Assignment-Library App copy1' + '/public/images/' + req.file.filename),
          // //     contentType: 'image/png'
          // // }
          //   }
            // bd.create(item);
           var book =  bd(item);
            
           book.save();
           
           
           res.redirect('/admin/books');
      
         
          });
         
        });
      
      
        // adminrouter.put('/update',function(req,res){
          
      
        //     const {id} = req.params
        //     const {title} = req.body.title
        //     const {author} = req.body.author
        //     const {genre} = req.body.genre
        //     const {image} = req.body.image
            
            
        //    res.redirect('/books')
      
         
        //   });

// Update Author

adminrouter.post('/updateauthor/:id/update',(req,res)=>{
  var upload = multer({ storage: storage }).single('image');
  // const id = req.params.id;

  

  upload(req, res, function(err) {

    if (!req.file) {
       console.log('Please select an image to upload');
   }
   // else if (err instanceof multer.MulterError) {
   //     return res.send(err);
   // }
   else if (err) {
     console.log(err);
   }
 else{
        var id = req.params.id;
       var item = {
     
       name: req.body.name,
       work: req.body.work,
       genre: req.body.genre,
       image: req.file.filename
       }
     }
 
  ad.findByIdAndUpdate(id,item, function (err, docs) {
  if (err){
      console.log(err)
  }
  else{
      console.log("Updated User : ", docs);
      
  }
  res.redirect('/admin/authors');
});
});
});
     














// adminrouter.get('/updateauthor',function(req,res){
//     res.render("updateauthor",
//     {
//       nav,
//         title: 'Edit An Author',
        
//       });
//   });

  adminrouter.get('/updateauthor/:id',function(req,res){

    const id = req.params.id
    ad.findOne({_id:id})
    .then(function(author){
      res.render('updateauthor',{
        nav : [{link:'/admin/books', name:'Books'},{link:'/admin/newbook', name: 'Add a Book'},{link:'/admin/authors', name: 'Authors'},{link:'/admin/newauthor', name: 'Add an Author'},{link:'/login', name: 'Logout'}],
          title: 'Edit Author',
          author
    
      });
    })
   
  });
  
  
  // Update Book

  adminrouter.post('/updatebook/:id/update',(req,res)=>{
    var upload = multer({ storage: storage }).single('image');
    // const id = req.params.id;
 
    

    upload(req, res, function(err) {
  
      if (!req.file) {
         console.log('Please select an image to upload');
     }
     // else if (err instanceof multer.MulterError) {
     //     return res.send(err);
     // }
     else if (err) {
       console.log(err);
     }
   else{
          var id = req.params.id;
         var item = {
       
         title: req.body.title,
         author: req.body.author,
         genre: req.body.genre,
         image: req.file.filename
         }
       }
   
    bd.findByIdAndUpdate(id,item, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Updated User : ", docs);
        
    }
    res.redirect('/admin/books');
  });
});
});
                                
//    .then(function(book){
//      console.log("Hi");
//        res.render("book",
//       //  {

//       //   nav,
//       //   title: 'Book',
//       //   book
        
        
//       //  }
       

//        );
//    }));
//  });
//   });
adminrouter.get('/updatebook/:id',function(req,res){

  const id = req.params.id;
   console.log(id);
  bd.findOne({_id:id})
  
  .then(function(book){
    res.render('updatebook',{
      nav : [{link:'/admin/books', name:'Books'},{link:'/admin/newbook', name: 'Add a Book'},{link:'/admin/authors', name: 'Authors'},{link:'/admin/newauthor', name: 'Add an Author'},{link:'/login', name: 'Logout'}],
        title: 'Edit Book',
        book
        
  
    });
  })
 
});
  
  
  











 
      
   
    return adminrouter;
}

    module.exports = router1;



