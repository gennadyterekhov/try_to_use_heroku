const creditModel = require('./creditModel').creditModel;


const transactionModel = require('./transactionModel').transactionModel;


const userModel = require('./userModel').userModel;
const mongoose = require('./../../server').mongoose;

// console.log('---in-body');
// console.log(transactionModel);
// const doc = new transactionModel();
// doc.value = 100;
// doc.subject = 'it works';
// console.log(doc);


// схема данных - задает структуру объекта, хранимого в БД
const scoreSchema = mongoose.Schema({
  credit: Boolean, // право на кредит
  subsidy: Boolean, // право на субсидию
  loan: Boolean, // право на ссуду
  canCharge: Boolean, // может штрафовать
  licenseId: Number, // внешний ключ к таблице лицензий
  ownerId: Number,
  value: Number, // количество единиц денег
  credits: Array,
  subsidies: Array,
  loans: Array,
});


// методы применимые к созданному объекту
scoreSchema.methods = {
  getCharged(value) {
    // уменьшаем счет recipient
    // возможно создаем объект типа списание/транзакция
    this.value -= value;
  },
  getCredit() {
    // добавляем элемент к массиву кредитов в нашем обьекте
    this.credits.push(creditModel());
  },
  async transferTo(recipientId, value, type, count, subject) {
    const recipientUser = await userModel.findById({ _id: recipientId });


    console.log('userModel:');
    console.log(userModel);


    console.log('trans model:');
    console.log(transactionModel);
    const transaction = new transactionModel({ senderId: this._id, recipientId: recipientUser.scores[0], value, type, count, subject });
    //await transaction.save();
    //transaction.perform();
  },
};


// статические методы
scoreSchema.statics = {};

// модель данных и ее экспорт
const scoreModel = mongoose.model('score', scoreSchema);
module.exports.scoreModel = scoreModel;
