"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dboperations = require('./dboperation');

var express = require('express');

var bodyParser = require('body-parser');

var app = express();
var router = express.Router();

var cors = require('cors');

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(cors());
app.use('/api', router);
router.use(function (request, response, next) {
  console.log('middleware');
  next();
});
app.use(function (_, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
}); // *- LOGIN -* //

router.route('/login').post(function _callee(request, response) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(dboperations.login(request, response));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}); // *- REGISTER -* //

router.route('/register').post(function _callee2(request, response) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(dboperations.register(request, response));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // *- TASK -* //

router.route('/task').post(function _callee3(request, response) {
  var task;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          task = _objectSpread({}, request.body);
          dboperations.task(task).then(function (result) {
            response.status(200).json(result);
          });
          _context3.next = 4;
          return regeneratorRuntime.awrap(dboperations.task(task));

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}); // *- TEST -* //

router.route('/test').get(function _callee4(request, response) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(dboperations.test().then(function (result) {
            response.status(200).json(result);
          }));

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  });
});
var port = process.env.PORT || 8090;
app.listen(port);
console.log('Server is running at ' + port);