const router = require('express').Router();
const bcrypt = require('bcrypt')
const loginController = require('../controller/login-controller')


router.post('/', async (req,res)=>{

      try{
               let passwordCheck = req.body.password;
               let emailCheck = req.body.email;
               res.status(200).json( await loginController.validate(passwordCheck,emailCheck))
      }catch(error){
          res.status(500).json({message:error.message})
      }
    
        
    })




module.exports = router;