const languageModel = require('../models/languageModel').languageModel;

exports.getPage = async function (req, res) {
  const languages = await languageModel.find() || '';
  console.log(languages[0]);
  res.render('listView.html', { languages });
};
