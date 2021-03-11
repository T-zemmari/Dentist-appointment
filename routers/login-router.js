const router = require('express').Router();
const bcrypt = require('bcrypt')
const loginController = require('../controller/login-controller')
const userController = require('../controller/user-controller');


router.post('/', async (req,res)=>{

      try{
               let passwordCheck = req.body.password;
               let emailCheck = req.body.email;
               let token = await loginController.validate(passwordCheck,emailCheck)
               let user = await userController.getuserByEmail(emailCheck);
               res.status(200).json({token,user});
      }catch(error){
       
          res.status(500).json({message:error.message})
      }
    
        
    })




module.exports = router;