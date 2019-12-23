const transactionModel = require('../models/transactionModel').transactionModel;


exports.getPage = async (req, res) => {
  const transactions = await transactionModel.find();
  res.render('transactionListView.html', { transactions });
};
