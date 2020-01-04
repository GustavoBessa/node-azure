'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
  cpf: {
    type: String
  },
  nome: {
    type: String
  }
});

module.exports = mongoose.model('customers', CustomerSchema);