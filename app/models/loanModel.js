const mongoose = require('./../../server').mongoose;

// схема данных - задает структуру объекта, хранимого в БД
const loanSchema = mongoose.Schema({
  value: Number,
  scoreId: Number, // внешний ключ к таблице счетов
});


loanSchema.methods = {};


loanSchema.statics = {
  chargeAll() {

  },
};


// модель данных и ее экспорт
const loanModel = mongoose.model('loan', loanSchema);
module.exports.loanModel = loanModel;
