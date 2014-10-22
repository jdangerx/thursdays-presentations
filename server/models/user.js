var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  hsId: Number,
  displayName: String,
  zulipEmail: String,
  email: String,
  image: String,
  credits: { type: Number, default: 0 }
}, {
  // we need to set this so empty object can be persisted
  minimize: false
});

userSchema.statics.getUserById = function (id, cb) {
  this.model('User').findOne({ hsId: id }, cb);
};

module.exports = mongoose.model('User', userSchema);
