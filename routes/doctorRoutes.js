const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

router.get('/doctors', doctorController.getDoctors);
router.get('/doctors/:id', doctorController.getDoctor);
router.post('/doctors', doctorController.createDoctor);
router.put('/doctors/:id', doctorController.updateDoctor);
router.delete('/doctors/:id', doctorController.deleteDoctor);

module.exports = router;
