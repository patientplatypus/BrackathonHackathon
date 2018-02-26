var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  playerIdOrActual: {type: String, required: true},
  games64: {type: Array, required: false},
  games32: {type: Array, required: false},
  games16: {type: Array, required: false},
  games8: {type: Array, required: false},
  games4: {type: Array, required: false},
  games2: {type: Array, required: false},
  winner: {type: Array, required: false}
});

var Bracketmodel = mongoose.model('bracketModel', schema);

module.exports = Bracketmodel;
