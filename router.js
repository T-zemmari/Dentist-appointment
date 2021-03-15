const router = require('express').Router();
const userRouter = require('./routers/user-router');
const loginRouter = require('./routers/login-router');
const authenticateAdmin = require('./middleware/authenticate-admin');
const appointmentRouter = require('./routers/appointment-router');


// REST RESOURCES

router.use('/users', userRouter);
router.use('/login', loginRouter);
router.use('/appointments',authenticateAdmin, appointmentRouter);



module.exports = router;