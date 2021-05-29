const express = require('express');
const bookrouter = express.Router();


function router(nav)
{


var books = [
    {
        title : 'The Alchemist',
        author : 'Paulo Coelho',
        genre : 'Novel',
        img : 'alchemist.jpeg'
    },
    {
      title : 'The Secret',
      author : 'Rhonda Byrne',
      genre : 'self-help',
      img : 'secret.jpeg'
    },
    
    {
      title : 'Three Thousand Stitches: Ordinary People, Extraordinary Lives',
      author : 'Sudha Murty',
      genre : 'anecdotes',
      img : 'threethousand.jpeg'
    },
    {
      title : 'The Test of My Life: From Cricket to Cancer and Back',
      author : 'Yuvraj Singh',
      genre : 'autobiography',
      img : 'testofmylife.jpeg'
    },
    
    {
      title : 'The Lost Symbol',
      author : 'Dan Brown',
      genre : 'Mystery',
      img : 'lostsymbol.jpeg'
    },
    
    
    ]
    
    bookrouter.get('/',function(req,res){
      res.render("books",
      {
        nav,
          title: 'Books',
          books
        });
    });
    
    bookrouter.get('/:id',function(req,res){
      const id = req.params.id
      res.render('book',{
        nav,
          title: 'Book',
          book:books[id]
    
      });
    });

    return bookrouter;
}

    module.exports = router;