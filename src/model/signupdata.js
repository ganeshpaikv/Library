const mongoose  = require("mongoose");
var path = require('path');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb+srv://userone:userone@fsdfiles.ev4q3.mongodb.net/Library?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;
const Signupschema = new Schema({
      name: String,
      mobile: String,
      password: String,
      cpassword: String
      
    
});

var signupdata = mongoose.model('newuser',Signupschema);


Signupschema.path('name').validate(async (value) => {
      const emailCount = await mongoose.models.newuser.countDocuments({name: value });
      return !emailCount;
    }, 'Email already exists');

module.exports= signupdata;