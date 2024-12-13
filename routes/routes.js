const express = require('express');
const router = express.Router();

var csvController = require('../controllers/csv');

router.post('/upload', csvController.saveCSV);
router.get('/list', csvController.listCSV);

module.exports = router;