const creditModel = require('../models/creditModel').creditModel;
const subsidyModel = require('../models/subsidyModel').subsidyModel;
const loanModel = require('../models/loanModel').loanModel;

const scoreModel = require('../models/scoreModel').scoreModel;

exports.getPage = (req, res) => {
  const credit = creditModel.find() || 'no credits';
  const subsidy = subsidyModel.find() || 'no subsidies';
  const loan = loanModel.find() || 'no loans';
  var score = 0;
  var scoreId = 0;
  var scoreValue = 0;
  var error = '';

  var debug = [];
  debug.push('ВНУТРИ getPage');
  try {
    score = scoreModel.findById({ '_id': '5df1297347c14437a48327b9' }, function(error, result) {
    if (error) {
      debug.push('ВНУТРИ FIND IF');
      error = 'возникла ошибка при нахождении обьекта';
    }
      score = result;
      scoreValue = result.value;
      debug.push('ВНУТРИ FIND');
      console.log('**********inside find***********');
  });
  } catch (error) {
    debug.push('внутри catch');
  } finally {
    debug.push('внутри finally');
  }
  

  debug.push('ВНУТРИ getPage ПОСЛЕ FIND');

  res.render('adminView.html', {
    credit,
    subsidy,
    loan,
    score,
    scoreValue,
    error,
    debug,
  });
};

exports.chargeAll = (req, res) => {
  switch (req.body.type) {
    case 'credit':
      creditModel.chargeAll();
      break;
    case 'subsidy':
      subsidyModel.chargeAll();
      break;
    case 'loan':
      loanModel.chargeAll();
      break;
    default:
      break;
  }
  res.redirect('/admin');
};
