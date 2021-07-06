const express = require('express');
const userarouter = express.Router();
const authordata = require('../model/authordata');

function router1(nav)
{

  userarouter.get('/',function(req,res){
      authordata.find()
      .then(function(authors){
        res.render("authors",
        {
          nav,
            title: 'Authors',
            authors
          });
      })
    
    });
    userarouter.post('/update',function(req,res){
      var id = req.body.id;
      var item ={ 

      
          name: req.body.name,
          work: req.body.work,
          genre: req.body.genre,
          image: req.body.image
          };
      authordata.updateOne(req.params.id)
      .then(function(authors){
        res.render("newauthor",
      {
      
  
        nav,
          title: 'Add New Author',
          
        });
      })
    
    });
    


    userarouter.get('/delete/:id',function(req,res){
      const id = req.params.id;
      authordata.deleteOne({_id:id})
      .then(function(author){
        res.render('deleteauthor',{
          nav,
            title: 'Deleted Successfully',
            author
      
        });
      })
     
    });
    




    userarouter.get('/:id',function(req,res){
        
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

    return userarouter;
}

    module.exports = router1;



