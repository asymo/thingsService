import express = require('express');
const router = express.Router();
const ThingsController = require('../controllers/things');

router.get('', ThingsController.getThings);
router.get('/:id', ThingsController.getIndividualThing);
router.post('', ThingsController.createThing);

module.exports = router;