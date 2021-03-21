const router = require('express').Router();
const userController = require('../controller/user-controller');
const appointmentRouter = require('./appointment-router');
const authenticate = require('../middleware/authenticate')


router.use('/:id/appointments',authenticate,appointmentRouter);


/*router.get('/', async (req, res) => {

    try {
        res.json(await userController.getAllUsers())
    } catch (error) {
        res.json({
            message: error.message
        })
    }
})

*/

// logout

router.get('/:id/logout', authenticate, async (req, res) => {

    try {
        id = req.params.id;
        res.status(200).json({status:'success',message:'User successfully logged out.',do:['deleteToken','goToHome']})
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

// getting user data

router.get('/:id',authenticate, async (req, res) => {

    try {
        id = req.params.id
        res.status(200).json(await userController.getUserData(id))
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})


// creating new user

router.post('/', async (req, res) => {

    try {
        let userData = req.body;
        res.status(200).json(await userController.create(userData))
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
})



router.put('/:id',authenticate, async (req, res) => {
    try {
        let id = req.params.id;
     console.log(id)
        res.status(200).json(await userController.update(id,req.body))
        console.log(req.body);
    }catch(error){
        console.log(error.message);
        res.status(500).json({
            message: error.message
        });
    }
})

/*

router.delete('/:id', authenticate, async (req, res) => {
    try {
        let id = req.params.id;
        res.status(200).json(await userController.delete(id))
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

*/


module.exports = router;