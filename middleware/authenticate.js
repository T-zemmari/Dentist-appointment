
const login = require('../routers/login-router');
const jwt = require('jsonwebtoken');
const secret = 'Tarek Y Fede Son el Mejor Equipo de geeksHubs'



const authenticate =  (req,res,next)=>{

    try{
        
      let token =  req.headers.authorization.split(' ')[1];
    
      let auth=  jwt.verify(token,secret);
      
      if(auth.userId != req.params.id){
          throw new Error('No se ha conseguido la verficiacion')
      }
      return next();

    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
    
}




module.exports = authenticate;