const router = require('express').Router({mergeParams: true});
const appointmentController = require('../controller/appointment-controller');

// Get all user appointments

router.get('/',async (req,res) => {
    try{
        const uid = req.params.uid;
        res.json(await appointmentController.getAllUserAppointments(uid,req.query.pending));
    } catch(error) {
        res.status(500).json({message:error.message});
    }
})

// Get one appointment data

router.get('/:id',async (req,res) => {
    try{
        const uid = req.params.uid;
        const id = req.params.id;
        res.json(await appointmentController.getAppointmentData(uid,id));
    } catch(error) {
        res.status(500).json({message:error.message});
    }
})

// Create new appointment

router.post('/',async (req,res) => {
    try{
        const uid = req.params.uid;
        req.body.userId = uid;
        res.json(await appointmentController.create(req.body));
    } catch(error) {
        res.status(500).json({message:error.message});
    }
})

// Cancel appointment

router.delete('/:id',async (req,res) => {
    try{
        const uid = req.params.uid;
        const id = req.params.id;
        res.json(await appointmentController.delete(uid,id));
    } catch(error) {
        res.status(500).json({message:error.message});
    }
})

module.exports = router;