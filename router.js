const express = require('express');
const indexController = require('./app/controllers/indexController');
const transactionDetailController = require('./app/controllers/transactionDetailController');
const transactionListController = require('./app/controllers/transactionListController');
const scoreController = require('./app/controllers/scoreController');

const createController = require('./app/controllers/createController');

const adminController = require('./app/controllers/adminController');

const router = express.Router();

router.get('/', indexController.getPage);
router.get('/transaction/:id', transactionDetailController.getPage);
router.get('/transactions', transactionListController.getPage);

router.get('/create', createController.getPage);
router.post('/create', createController.create);

router.get('/score', scoreController.getPage);
router.post('/score', scoreController.transferTo);

router.post('/score/getCredit', scoreController.getCredit);

router.get('/admin', adminController.getPage);
router.post('/admin', adminController.chargeAll);


module.exports = router;
