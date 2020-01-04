'use strict';
var mongoose = require('mongoose'),
  customers = mongoose.model('customers');

exports.list_all_posts = function (req, res) {
  customers.find({}, function (err, msg) {
    if (err)
      res.send(err);
    res.json(msg);
  });
};

exports.search = function (req, res) {
  customers.find({cpf:req.body.cpf}, function (err, msg) {
    if (err)
      res.send(err);
    res.json(msg);
  });
};

exports.create_posts = function (req, res) {
  var post = new customers(req.body);
  post.save(function (err, msg) {
    if (err)
      res.send(err);
    res.json(msg);
  });
};