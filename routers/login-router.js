const router = require('express').Router();
const bcrypt = require('bcrypt')



router.post('/', async (req,res)=>{

    let password = bcrypt.compare(password,hash,()=>{
        return;
    })
})



module.exports = router;