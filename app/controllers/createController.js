const languageModel = require('../models/languageModel').languageModel;

exports.getPage = function (req, res) {
  res.render('createView.html');
};

exports.create = async function (req, res) {
  const name = req.body.name;
  const language = new languageModel({ name });
  language.save();
  res.redirect('/list');
};
