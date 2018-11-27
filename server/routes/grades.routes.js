const { Router } = require('express');

const gradesController = require('../controllers/grades.controller');

const router = new Router();

router.route('/grade').post(gradesController.calculateGrade)

module.exports = router;