const scoreModel = require('../models/scoreModel').scoreModel;
const mongoose = require('./../../server').mongoose;

// схема данных - задает структуру объекта, хранимого в БД
const creditSchema = mongoose.Schema({
  value: Number,
  scoreId: Number,
});


// методы применимые к созданному объекту
creditSchema.methods = {
  start() {
    // const score = scoreModel.findById(this.scoreId);
    // score.value += this.value;
  },
};


creditSchema.statics = {
  chargeAll() {

  },
};

// модель данных и ее экспорт
const creditModel = mongoose.model('credit', creditSchema);
module.exports.creditModel = creditModel;
