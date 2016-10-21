/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var hamstersRouter = express.Router();

  hamstersRouter.get('/notes', function(req, res) {
    res.send({
      'data': []
    });
  });

  hamstersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  hamstersRouter.get('/:id', function(req, res) {
    res.send({
      'hamsters': {
        id: req.params.id
      }
    });
  });

  hamstersRouter.put('/:id', function(req, res) {
    res.send({
      'hamsters': {
        id: req.params.id
      }
    });
  });

  hamstersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/hamsters', require('body-parser').json());
  app.use('/api', hamstersRouter);
};
