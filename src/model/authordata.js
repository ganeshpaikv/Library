const mongoose  = require("mongoose");
mongoose.connect('mongodb+srv://userone:userone@fsdfiles.ev4q3.mongodb.net/Library?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;
const Authorschema = new Schema({
    
    name: String,
    work: String,
    genre: String,
    image: String
});

var authordata = mongoose.model('author',Authorschema);

module.exports= authordata;
