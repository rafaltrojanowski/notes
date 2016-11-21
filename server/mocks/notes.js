/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var notesRouter = express.Router();

  notesRouter.get('/notes', function(req, res) {
    console.log(req);
    console.log(res);

    res.send({
      "data": [
        {
          "attributes": {
            "title": "Benfica",
          },
          "id": "1",
          "relationships": {},
          "type": "notes"
        }
      ],
      "included": []
    });
  });

  notesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  notesRouter.get('/:id', function(req, res) {
    res.send({
      'notes': {
        id: req.params.id
      }
    });
  });

  notesRouter.put('/:id', function(req, res) {
    res.send({
      'notes': {
        id: req.params.id
      }
    });
  });

  notesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/notes', require('body-parser').json());
  app.use('/api', notesRouter);
};
