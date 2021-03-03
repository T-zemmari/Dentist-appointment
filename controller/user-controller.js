const {User} = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


class UserController{

  // getting a list of all users

   async getAllUsers(){

     return User.findAll()
   }

// getting one user data

   async getUserData(id){
       return User.findByPk(id)
 }

// creating a new User

   async create(userData){
       return User.create(userData);
   }

 //  updating user data

   async update(id){
       return User.findByPkAndUpdate(id)
   }

//   removing user data

   async delete(id){
       return User.findByPkAndRemove(id)
   }


}

let userController= new UserController();
module.exports = userController;
