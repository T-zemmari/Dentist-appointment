const router = require('express').Router();
const userRouter = require('./routers/user-router');
const loginRouter = require('./routers/login-router');
const authenticate = require('./middleware/authenticate');


// REST RESOURCES

router.use('/users', userRouter);
router.use('/login', loginRouter);



//router.get('/',(req,res)=>{res.json('Hola!')});

module.exports = router;