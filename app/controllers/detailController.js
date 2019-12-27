const languageModel = require('../models/languageModel').languageModel;

exports.getPage = async function (req, res) {
  const language = await languageModel.findById({ _id: req.params.id })
  res.render('detailView.html', { language });
};
