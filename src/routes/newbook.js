const express = require('express');
const newbookrouter = express.Router();


function newbrouter(nav)
{


// var books = [
//     {
//         title : 'The Alchemist',
//         author : 'Paulo Coelho',
//         genre : 'Novel',
//         img : 'alchemist.jpeg'
//     },
//     {
//       title : 'The Secret',
//       author : 'Rhonda Byrne',
//       genre : 'self-help',
//       img : 'secret.jpeg'
//     },
    
//     {
//       title : 'Three Thousand Stitches: Ordinary People, Extraordinary Lives',
//       author : 'Sudha Murty',
//       genre : 'anecdotes',
//       img : 'threethousand.jpeg'
//     },
//     {
//       title : 'The Test of My Life: From Cricket to Cancer and Back',
//       author : 'Yuvraj Singh',
//       genre : 'autobiography',
//       img : 'testofmylife.jpeg'
//     },
    
//     {
//       title : 'The Lost Symbol',
//       author : 'Dan Brown',
//       genre : 'Mystery',
//       img : 'lostsymbol.jpeg'
//     },
    
    
//     ]
    
    newbookrouter.get('/',function(req,res){
      res.render("newbook",
      {
        nav,
          title: 'Add New Book',
          
        });
    });
    
    // bookrouter.get('/:id',function(req,res){
    //   const id = req.params.id
    //   res.render('book',{
    //     nav,
    //       title: 'Book',
    //       book:books[id]
    
    //   });
    // });

    return newbookrouter;
}

    module.exports = newbrouter;