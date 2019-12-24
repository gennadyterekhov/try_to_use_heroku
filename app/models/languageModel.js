const mongoose = require('./../../server').mongoose;


const languageSchema = mongoose.Schema({
  name: String,
});


languageSchema.methods = {};


languageSchema.statics = {};


const languageModel = mongoose.model('language', languageSchema);
module.exports.languageModel = languageModel;
