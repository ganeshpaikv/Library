const mongoose  = require("mongoose");
const AdminBro = require('admin-bro');
const AdminBroExpressjs = require('admin-bro-expressjs');
AdminBro.registerAdapter(require('admin-bro-mongoose'));

AdminBro.registerAdapter(require('admin-bro-mongoose'));

mongoose.connect('mongodb+srv://userone:userone@fsdfiles.ev4q3.mongodb.net/Library?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;
const Userschema = new Schema({
    name: String,
    password: String,
    
});

var userdata = mongoose.model('user',Userschema);

module.exports= userdata;