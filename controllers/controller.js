const dataBase = require('../models/userModel')
const defaultController =async (req , res) =>{
    console.log("req.user",req.user,req.isAuthenticated());
    res.render('index',{data:req.user , logInMess: req.flash('logIn') })
}
module.exports = {defaultController,logout,register,signIn}