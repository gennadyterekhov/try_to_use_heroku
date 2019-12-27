const languageModel = require('../models/languageModel').languageModel;

exports.getPage = function (req, res) {
  res.render('createView.html');
};

exports.create = async function (req, res) {
  const name = req.body.name;
  const consonants = req.body.consonants.split(',');
  const vowels = req.body.vowels.split(',');
  const language = await languageModel.create({ name, consonants, vowels });
  res.redirect('/list');
};
