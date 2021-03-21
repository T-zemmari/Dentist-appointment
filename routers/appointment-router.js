const router = require('express').Router({mergeParams: true});
const appointmentController = require('../controller/appointment-controller');

// Get available slots

router.get('/slots/:did',async (req,res) => {
    try{
        let did = parseInt(req.params.did);
        if(did>0 && did <5)
        res.json(await appointmentController.getAvailableSlots(did));
        else
        throw new Error('No appointments available for this dentist.')
    } catch(error) {
        console.log(error.message)
        res.status(500).json({message:error.message});
    }
})

// Get all user appointments

router.get('/',async (req,res) => {
    try{
        const uid = req.params.id;
        if(uid){
        res.json(await appointmentController.getAllUserAppointments(uid,req.query.pending));
        }else{
            res.json(await appointmentController.getAllAppointments(req.query.pending)); 
            
        }
    } catch(error) {
        res.status(500).json({message:error.message});
    }
})

// Get one appointment data

router.get('/:aid',async (req,res) => {
    try{
        const uid = req.params.id;
        const id = req.params.aid;
        res.json(await appointmentController.getAppointmentData(uid,id));
    } catch(error) {
        res.status(500).json({message:error.message});
    }
})

// Create new appointment

router.post('/',async (req,res) => {
    try{
        const uid = req.params.id;
        req.body.userId = uid;
        res.json(await appointmentController.create(req.body));
    } catch(error) {
        res.status(500).json({message:error.message});
    }
})

// Cancel appointment

router.delete('/:aid',async (req,res) => {
    try{
        const uid = req.params.id;
        const id = req.params.aid;
        res.json(await appointmentController.delete(uid,id));
    } catch(error) {
        res.status(500).json({message:error.message});
    }
})

module.exports = router;