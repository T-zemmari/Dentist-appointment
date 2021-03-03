const router = require('express').Router();
const userController = require('../controller/user-controller');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




     router.get('/', async (req,res)=>{

       try{
       res.json(await userController.getAllUsers())
       }catch(error)
       {res.json({message:error.message})
    }
  })
    router.get('/:id', async (req,res)=>{

        try{
        id = req.params.id
        res.status(200).json( await userController.getUserData(id))
        }catch(error){
            res.status(500).json({message:error.message})
        }


    })


     // creating new user

    router.post('/',async(req,res)=>{

        try{
          
            let userData = req.body;
            
            res.status(200).json( await userController.create(userData))
        }catch(error){
            res.status(500).json({message:error.message});
        }
    })


  

    router.put('/:id', async (req,res)=>{
          try{
          let id = req.body.params;
          res.status(200).json( await userController.update(id))
          }catch(error){
              res.status(500).json({message:error.message});
          }
     })

     router.delete('/:id', async (req,res)=>{
         try{
             let id = req.body.params;
             res.status(200).json(await userController.delete(id))
         }catch(error){
             res.status(500).json({message:error.message})
         }
     })













module.exports= router;