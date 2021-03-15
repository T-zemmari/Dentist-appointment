
const login = require('../routers/login-router');
const jwt = require('jsonwebtoken');
const secret = 'Tarek Y Fede Son el Mejor Equipo de geeksHubs'



const authenticateAdmin =  (req,res,next)=>{

    try{
       console.log('middleware')
      let token =  req.headers.authorization.split(' ')[1];
    
      let payload=  jwt.verify(token,secret);
      
      if(!payload.admin){
          throw new Error('No se ha conseguido la verficiacion')
      }
      return next();

    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
    
}




module.exports = authenticateAdmin;