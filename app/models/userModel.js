const mongoose = require('./../../server').mongoose;

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  name: String,
  scores: Array,
  // licenseName: String, // имя удобно хранить здесь чтобы вызывать на странице счета
});

userSchema.methods = {};

userSchema.statics = {
  getUserIdByName: (name) => {
    switch (name) {
      case 'Project_3':
        return '5dfcfb7f98eb081644a0e3c8';
      case 'X03':
        return '5dfcfbcda114f627d43c1bab';
      case 'C03':
        return '5dfcfbd88e59380cd41bff95';
      case 'user1':
        return '5dfd07da1702dd108c6ab183';
      case 'user2':
        return '5dfd0814fbce94099c04ec12';
      default:
        return '5dfcfb7f98eb081644a0e3c8';
    }
  },
};

const userModel = mongoose.model('user', userSchema);
module.exports.userModel = userModel;
