const express = require('express');
const app = new express();
const port = process.env.PORT || 2000;

const nav = [{link:'/books', name:'Books'},{link:'/newbook', name: 'Add a Book'},{link:'/authors', name: 'Authors'},{link:'/newauthor', name: 'Add an Author'},{link:'/signup', name: 'Sign-Up'},{link:'/login', name: 'Login'}];
const bookrouter = require('./src/routes/bookroutes')(nav);
const authrouter = require('./src/routes/authorroute')(nav);
const signuprouter = require('./src/routes/signuproute')(nav);
const loginrouter = require('./src/routes/loginroute')(nav);

const newbookrouter = require('./src/routes/newbook')(nav);
const newauthorrouter = require('./src/routes/newauthor')(nav);


app.use('/newbook', newbookrouter);
app.use('/newauthor',newauthorrouter);
app.use('/authors', authrouter);
app.use('/books',bookrouter);
app.use('/signup',signuprouter);
app.use('/login',loginrouter);
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views')

app.get('/',function(req,res){
    res.render("index",
    {
      nav,
      title: 'Library'
    });
});







app.listen(port,()=>{console.console.log("Server ready at "+ port)});
