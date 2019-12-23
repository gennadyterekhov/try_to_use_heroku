// const scoreModel = require('../models/scoreModel').scoreModel;
// const creditModel = require('../models/creditModel').creditModel;
// // const licenseModel = require('../models/licenseModel').licenseModel;
// const userModel = require('../models/userModel').userModel;

// exports.getPage = async function (req, res) {
//   const license = ''; // licenseModel.findById(user.licenseId) || '';
//   const users = await userModel.find();
//   let score = '';
//   try {
//     score = await scoreModel.findById({ _id: '5dfcf6de146aa517f0da83b9' });
//   } catch (error) {
//     console.log('---***--- error occurred');
//     console.log(error);
//   }

//   res.render('scoreView.html', { license, score, users });
// };

// exports.transferTo = async function (req, res) {
//   const recipientId = req.body.recipientId || '';
//   const transferValue = req.body.value || '';
//   const type = req.body.type || '';
//   const count = req.body.count || ''; // количество единиц
//   const subject = req.body.subject || ''; // предмет оплаты

//   const score = await scoreModel.findById('5dfcf6de146aa517f0da83b9');
//   score.transferTo(recipientId, transferValue, type, count, subject);
//   res.redirect('/score');
// };

// exports.getCredit = function (req, res) {
//   const creditValue = req.body.creditValue;

//   const score = ''; // scoreModel.findById(user.scores[0]) || '';
//   const credit = new creditModel({ scoreId: score._id, value: creditValue });
//   credit.start();
//   credit.save();
//   res.redirect('/score');
// };
