const scoreModel = require('../models/scoreModel').scoreModel;
const transactionModel = require('../models/transactionModel').transactionModel;
// const creditModel = require('../models/creditModel').creditModel;
// const licenseModel = require('../models/licenseModel').licenseModel;
const userModel = require('../models/userModel').userModel;

exports.getPage = function (req, res) {
  res.render('createView.html');
};

exports.create = async function (req, res) {
  const r = req.body;

  if (r.model === 'score') {
    const score = new scoreModel({ value: r.value });
    await score.save();
    res.render('scoreDetail.html', { score });
  } else if (r.model === 'user') {
    const user = new userModel({ name: r.name, scores: [r.scoreId] });
    await user.save();
    res.render('userDetail.html', { user });
  } else if (r.model === 'transaction') {
    const senderUserId = await userModel.getUserIdByName(r.senderName);
    const recipientUserId = await userModel.getUserIdByName(r.recipientName);

    const senderUser = await userModel.findById(senderUserId);
    const recipientUser = await userModel.findById(recipientUserId);

    const senderId = senderUser.scores[0];
    const recipientId = recipientUser.scores[0];

    const transaction = new transactionModel({ senderId, recipientId, value: r.value });
    await transaction.save();
    res.redirect('transactions');
  }
};
