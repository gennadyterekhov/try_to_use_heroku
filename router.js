const express = require('express');
const indexController = require('./app/controllers/indexController');
const createController = require('./app/controllers/createController');
const listController = require('./app/controllers/listController');
const detailController = require('./app/controllers/detailController');
const editController = require('./app/controllers/editController');

const router = express.Router();

router.get('/', indexController.getPage);
router.get('/create', createController.getPage);
router.post('/create', createController.create);
router.get('/list', listController.getPage);

router.get('/detail/:id', detailController.getPage);

router.get('/edit/:id', editController.getPage);
router.post('/edit/:id', editController.edit);

module.exports = router;
