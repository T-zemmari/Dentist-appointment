const router = require('express').Router();
const userController = require('../controller/user-controller');
const appointmentRouter = require('./appointment-router');


router.use('/:uid/appointments',appointmentRouter);

/*

router.get('/', async (req, res) => {

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

router.get('/:id/logout', async (req, res) => {

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

router.get('/:id', async (req, res) => {

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

/*

router.put('/:id', async (req, res) => {
    try {
        let id = req.body.params.id;
        res.status(200).json(await userController.update(id,req.body))
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        let id = req.body.params;
        res.status(200).json(await userController.delete(id))
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

*/












module.exports = router;