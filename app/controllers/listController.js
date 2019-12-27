const languageModel = require('../models/languageModel').languageModel;

exports.getPage = async function (req, res) {
  const languages = await languageModel.find() || '';
  res.render('listView.html', { languages });
};
