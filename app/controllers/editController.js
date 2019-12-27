const languageModel = require('../models/languageModel').languageModel;

exports.getPage = async function (req, res) {
  const language = await languageModel.findById({ _id: req.params.id });
  res.render('editView.html', { language });
};

exports.edit = async function (req, res) {
  const language = await languageModel.findById({ _id: req.params.id });

  const name = req.body.name;
  const consonants = req.body.consonants.split(',');
  const vowels = req.body.vowels.split(',');
  language.name = name;
  language.consonants = consonants;
  language.vowels = vowels;
  await language.save();
  res.redirect('/detail/' + req.params.id);
};
