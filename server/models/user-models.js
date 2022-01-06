const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024
  },
  password:{
    type: String,
    required: true,
    minLength: 6,
    maxLength: 1024,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});


//check role for API
 userSchema.methods.isStudent = function(){
   return this.role == "Student";
 }
 userSchema.methods.isInstructor = function(){
   return this.role == "Instructor";
 }
 userSchema.methods.isAdmin = function(){
   return this.role == "isAdmin";
 }


//mongoose schema middleware hash password brfore that been saved
userSchema.pre("save", async function(next){
  if( this.isModified("password") || this.isNew){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
  }else{
    return next();
  }
});

userSchema.methods.comparePassword = function(password, cb){
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if(err) {
      return cb(err, isMatch);
    }
    cb(null, isMatch);
  });
};

module.exports = mongoose.model("User", userSchema); 
