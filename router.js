const router = require('express').Router();
const userRouter = require('./routers/user-router');

// REST RESOURCES

router.use('/users',userRouter);

//router.get('/',(req,res)=>{res.json('Hola!')});

module.exports = router;