const mongoose = require('./../../server').mongoose;


const languageSchema = mongoose.Schema({
  name: String,
  consonants: Array,
  vowels: Array,
});


languageSchema.methods = {};


languageSchema.statics = {};


const languageModel = mongoose.model('language', languageSchema);
module.exports.languageModel = languageModel;
