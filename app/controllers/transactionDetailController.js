const transactionModel = require('../models/transactionModel').transactionModel;


exports.getPage = (req, res) => {
  if (+req.params.id === 1) {
    res.render('transactionDetailView.html', { t: transactionModel.getTransactionById(req.params.id) });
  } else {
    res.send('Not found transaction with id '.concat(req.params.id));
  }
};
