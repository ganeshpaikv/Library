const express = require('express');
const data = require('./public/js/data');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = new express();
passport = require("passport");
LocalStrategy = require("passport-local");
passportLocalMongoose = require("passport-local-mongoose");


var fs = require('fs');
var path = require('path');

 const p = process.env.PORT || 5000;
 const { ROLE, users } = require('./public/js/data');
 const { authUser, authRole } = require('./public/js/basicAuth');
//  const { users } = require('./public/js/data');

const nav = [{link:'/books', name:'Books'},{link:'/newbook', name: 'Add a Book'},{link:'/authors', name: 'Authors'},{link:'/newauthor', name: 'Add an Author'},{link:'/login', name: 'Logout'}];
const navbar = [{link:'/books', name:'Books'},{link:'/authors', name: 'Authors'},{link:'/login', name: 'Logout'}];
const navhome = [{link:'/signup', name: 'Sign-Up'},{link:'/login', name: 'Login'}];
const bookrouter = require('./src/routes/bookroutes')(nav);
const authrouter = require('./src/routes/authorroute')(nav);
const signuprouter = require('./src/routes/signuproute')(navhome);
const loginrouter = require('./src/routes/loginroute')(navhome);

// const newbookrouter = require('./src/routes/newbook')(nav);
// const newauthorrouter = require('./src/routes/newauthor')(nav);
// const updatebookrouter = require('./src/routes/updatebook')(nav);
// const updateauthorrouter = require('./src/routes/updateauthor')(nav);
const userrouter = require('./src/routes/userroute')(nav);
const adminrouter = require('./src/routes/adminroutes')(nav);
const userarouter = require('./src/routes/useraroute')(nav);


var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

app.use(express.json()); 
app.use(express.urlencoded({extended:true}));

// app.use(express.json());

// app.use('/newbook', newbookrouter);
// app.use('/newauthor',newauthorrouter);
// app.use('/updatebook', updatebookrouter);
// app.use('/updateauthor',updateauthorrouter);
// app.use('/authors', authrouter);
// app.use('/books',bookrouter);
app.use('/signup',signuprouter);
app.use('/login',loginrouter);
app.use('/user',userrouter);
app.use('/admin',adminrouter);
app.use(express.static('./public'));

app.use(require("express-session")({
  secret: "Rusty is a dog",
  resave: false,
  saveUninitialized: false
}));


app.set('view engine','ejs');
app.set('views','./src/views')
app.use(setUser)
app.get('/',function(req,res){

    res.render("index",
    {
      navhome,
      title: 'Welcome to Library'
    });
});





function setUser(req, res, next) {
  const userId = req.body.userId
  if (userId) {
    req.user = users.find(user => user.id === userId)
  }
  next()
}


app.listen(5001);
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });