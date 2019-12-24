const express = require('express');
const indexController = require('./app/controllers/indexController');
const createController = require('./app/controllers/createController');
const listController = require('./app/controllers/listController');

const router = express.Router();

router.get('/', indexController.getPage);
router.get('/create', createController.getPage);
router.post('/create', createController.create);
router.get('/list', listController.getPage);

module.exports = router;
