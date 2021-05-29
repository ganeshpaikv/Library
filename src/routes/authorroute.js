const express = require('express');
const authrouter = express.Router();


function router1(nav)
{


var authors = [
    {
        name : 'William Shakespeare',
        work : 'Macbeth',
        genre : 'Play',
        img : 'shakespeare.jpeg'
    },
    {
        name : 'Agatha Christie',
        work : 'Murder on the Orient Express',
        genre : 'Detective fiction',
        img : 'agatha.jpeg'
    },
    
    {
        name : 'Mark Twain',
        work : 'The Adventures of Tom Sawyer',
        genre : 'Novel',
        img : 'mark.jpeg'
    },
    {
        name : 'Leo Tolstoy',
        work : 'War and Peace',
        genre : 'Novel',
        img : 'leo.jpeg'
    },
    
    {
        name : 'Robert Frost',
        work : 'Mending Wall',
        genre : 'Poem',
        img : 'robert.jpeg'
    },
    
    
    ]
    
   authrouter.get('/',function(req,res){
      res.render("authors",
      {
        nav,
          title: 'Authors',
          authors
        });
    });
    
    authrouter.get('/:i',function(req,res){
      const i = req.params.i
      res.render('author',{
        nav,
          title: 'Author',
          author:authors[i]
    
      });
    });

    return authrouter;
}

    module.exports = router1;