const scoreModel = require('./scoreModel').scoreModel;
const mongoose = require('./../../server').mongoose;

// схема данных - задает структуру объекта, хранимого в БД
const transactionSchema = mongoose.Schema({
  senderId: String,
  recipientId: String,
  value: Number,
  type: Number,
  count: Number,
  subject: String,
});


// методы применимые к созданному объекту
transactionSchema.methods = {
  async perform() {
    const senderScore = await scoreModel.findById({ _id: this.senderId });
    const recipientScore = await scoreModel.findById({ _id: this.recipientId });
    senderScore.value -= this.value;
    recipientScore.value += this.value;
    await senderScore.save();
    await recipientScore.save();
  },
};


// статические методы
transactionSchema.statics = {};

// модель данных и ее экспорт
const transactionModel = mongoose.model('transaction', transactionSchema);
module.exports.transactionModel = transactionModel;
