const mongoose = require('./../../server').mongoose;

// схема данных - задает структуру объекта, хранимого в БД
const subsidySchema = mongoose.Schema({
  value: Number,
  scoreId: Number, // внешний ключ к таблице счетов
});


subsidySchema.methods = {};

subsidySchema.statics = {
  chargeAll() {

  },
};

// модель данных и ее экспорт
const subsidyModel = mongoose.model('subsidy', subsidySchema);
module.exports.subsidyModel = subsidyModel;
