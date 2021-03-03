const userController = require('./user-controller');
const  bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = 'Tarek Y Fede Son el Mejor Equipo de geeksHubs'


class LoginController{




    async validate(passwordCheck,emailCheck){

        let user =  await userController.getuserByEmail(emailCheck);
        let password = user.password;
        
        let verify = await bycrypt.compare(passwordCheck,password)
         
        if(!verify){
            throw new Error('Contraseña erronea')
        }
        let payload ={
            userId : user.id,
            creatAdt: new Date,
            
        }
         return jwt.sign(payload,secret);
    }
}

let loginController = new LoginController();
module.exports = loginController;