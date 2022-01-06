const router = require("express").Router();
const registerValidation = require("../validation").registerValidation;
const loginValidation = require("../validation").loginValidation;
const User = require("../models").userModel;
const jwt = require("jsonwebtoken");


router.use( (req,res,next) => {
  console.log("A request is coming in to auth.js");
  next();
});

router.get("/testAPI",(req,res) => {
  const msgObj = {
    message: "Test API is working"
  };
  return res.json(msgObj);
});

router.post("/signup",async (req,res) =>{
  //check the validation of data
  const {error} = registerValidation(req.body);
  if(error){
    return res.status(404).send(error.details[0].message); 
  }

  //register the user
  const emailExist = await User.findOne({ email:req.body.email });
  if(emailExist){ 
    return res.status(404).send("Email has aleady been register")
  }

  //register the user
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    
  });
  try{
    const savedUser = await newUser.save();
    res.status(200).send({
      msg: "success",
      savedObject: savedUser,
    });
  }catch(err){
    console.log(err);
    res.status(400).send("User not saved");
  }
});





//Login
router.post("/login", (req,res) => {
  //check the validation of data
  const {error} = loginValidation(req.body);
  if(error){
    return res.status(400).send(error.details[0].message);
  }

  //check email match or not
  User.findOne( {email: req.body.email}, function(err,user){
    if(err){
      res.status(400).send(err);
    }
    if(!user){
      res.status(401).send("User is not find");
    }else{
      // if find user email then check it password
      user.comparePassword(req.body.password, function(err, isMatch){
        if(err) return res.status(400).send(err);
        if(isMatch){
          const tokenObject = {_id: user._id, email: user.email};
          const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);
          res.send({success: true, token: "JWT " + token, user});
        }else{
          
          res.status(401).send("wrong password");
        }
      });
    }
  }); 
});

 


module.exports = router;