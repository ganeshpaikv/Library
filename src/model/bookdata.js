const mongoose  = require("mongoose");
const AdminBro = require('admin-bro');
const AdminBroExpressjs = require('admin-bro-expressjs');
AdminBro.registerAdapter(require('admin-bro-mongoose'));
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');


mongoose.connect('mongodb+srv://userone:userone@fsdfiles.ev4q3.mongodb.net/Library?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;
const Bookschema = new Schema({
    
    title: String,
    author: String,
    genre: String,
    image: String
    // {
    //     data: Buffer,
    //     contentType: String
    // }
});

var Bookdata = mongoose.model('book',Bookschema);

module.exports= Bookdata;
