const express = require('express');
const indexController = require('./app/controllers/indexController');
const scoreController = require('./app/controllers/scoreController');
const createController = require('./app/controllers/createController');

const router = express.Router();

router.get('/', indexController.getPage);

router.get('/create', createController.getPage);
router.post('/create', createController.create);

router.get('/score', scoreController.getPage);
router.post('/score', scoreController.transferTo);

module.exports = router;
