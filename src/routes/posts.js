'use strict';

module.exports = function (app) {
  var posts = require('../controllers/PostController');

  app.route('/')
    .get(posts.list_all_posts)
    .post(posts.create_posts);
  app.route('/search').get(posts.search);
};