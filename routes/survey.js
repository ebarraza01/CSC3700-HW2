const express = require('express');
const router = express.Router();
const surveyController = require("../controllers/surveyController");

router.get('/survey', surveyController.survey);
router.get('/surveyResults', surveyController.surveyRes);

module.exports = router;