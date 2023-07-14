"use strict";

var sql = require('mssql');

var config = require('./dbconfig');

function login(request, response) {
  var _request$body, username, password, pool, result, storedPassword;

  return regeneratorRuntime.async(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _request$body = request.body, username = _request$body.username, password = _request$body.password;

          if (!(username == null || password == null)) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", response.status(401).send('Please enter username and password'));

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(sql.connect(config));

        case 8:
          pool = _context.sent;
          _context.next = 11;
          return regeneratorRuntime.awrap(pool.request().input('username', sql.VarChar, username).query("SELECT password from users where username = @username"));

        case 11:
          result = _context.sent;
          storedPassword = result.recordset[0].password;

          if (!(result.recordset[0].length === 0)) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", response.status(404).send('User does not exist'));

        case 17:
          if (!(result.recordset[0].password != password)) {
            _context.next = 21;
            break;
          }

          return _context.abrupt("return", response.status(403).send('Wrong password'));

        case 21:
          return _context.abrupt("return", response.status(200).send('Login Success'));

        case 22:
          _context.next = 28;
          break;

        case 24:
          _context.prev = 24;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          return _context.abrupt("return", response.status(500).send('Internal Server Error'));

        case 28:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 24]]);
}

function register(request, response) {
  var _request$body2, email, username, password, pool, checkUserQuery, checkUserResult, insertUserQuery, insertUserResult;

  return regeneratorRuntime.async(function register$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _request$body2 = request.body, email = _request$body2.email, username = _request$body2.username, password = _request$body2.password;

          if (!(typeof email === 'undefined' || typeof username === 'undefined' || typeof password === 'undefined')) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", response.status(401).send('Please fill in all required information'));

        case 6:
          _context2.next = 8;
          return regeneratorRuntime.awrap(sql.connect(config));

        case 8:
          pool = _context2.sent;
          checkUserQuery = "\n          SELECT * FROM users WHERE username = @username OR email = @email\n        ";
          _context2.next = 12;
          return regeneratorRuntime.awrap(pool.request().input('username', sql.VarChar, username).input('email', sql.VarChar, email).query(checkUserQuery));

        case 12:
          checkUserResult = _context2.sent;

          if (!(checkUserResult.recordset.length > 0)) {
            _context2.next = 17;
            break;
          }

          return _context2.abrupt("return", response.status(409).send('User already exists'));

        case 17:
          insertUserQuery = "\n            INSERT INTO users (email, username, password)\n            VALUES (@email, @username, @password)\n          ";
          _context2.next = 20;
          return regeneratorRuntime.awrap(pool.request().input('email', sql.VarChar, email).input('username', sql.VarChar, username).input('password', sql.VarChar, password).query(insertUserQuery));

        case 20:
          insertUserResult = _context2.sent;
          return _context2.abrupt("return", response.status(200).send("Welcome ".concat(username)));

        case 22:
          _context2.next = 28;
          break;

        case 24:
          _context2.prev = 24;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          return _context2.abrupt("return", response.status(500).send('Internal Server Error'));

        case 28:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 24]]);
} // async function task(request, response) {
//   try {
//     const { taskName,assigneel,description,dueDay } = request.body;
//     if (typeof taskName === 'undefined' || assigneel === 'undefined' || description === 'undefined' || dueDay === 'undefined') {
//       return response.status(401).send('Please fill in all required information');
//     } else {
//       const pool = await sql.connect(config);
//       if (checkTaskResult.recordset.length > 0) {
//         return response.status(409).send('Error');
//       } else {
//         const insertTaskQuery = `
//             INSERT INTO tasks (taskName,assigneel,description,dueDay)
//             VALUES (@taskName,@assigneel,@description,@dueDay)
//           `;
//         const insertTaskResult = await pool
//           .request()
//           .input('taskName', sql.VarChar, taskName)
//           .input('assigneel', sql.VarChar, assigneel)
//           .input('description', sql.VarChar, description)
//           .input('dueDay', sql.VarChar, dueDay)
//           .query(insertTaskQuery);
//         return response.status(200).send(`${taskName}`);
//       }
//     }
//   } catch (error) 
//   {
//     console.error(error);
//     return response.status(500).send('Internal Server Error');
//   }
// }


function task(task) {
  var pool, add;
  return regeneratorRuntime.async(function task$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(sql.connect(config));

        case 3:
          pool = _context3.sent;
          _context3.next = 6;
          return regeneratorRuntime.awrap(pool.request().input('taskName', sql.NVarChar, task.taskName).input('assigneel', sql.NVarChar, task.assigneel).input('description', sql.NVarChar, task.description).input('dueDay', sql.NVarChar, task.dueDay).query('INSERT INTO tasks (taskName,assigneel,description,dueDay) VALUE (@taskName, @assigneel, @description, @dueDay) '));

        case 6:
          add = _context3.sent;
          return _context3.abrupt("return", add.recordsets);

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 10]]);
}

function test(request, response) {
  var pool, test;
  return regeneratorRuntime.async(function test$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(sql.connect(config));

        case 2:
          pool = _context4.sent;
          _context4.next = 5;
          return regeneratorRuntime.awrap(pool.request().query("SELECT * from users"));

        case 5:
          test = _context4.sent;
          return _context4.abrupt("return", test.recordset);

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  });
}

module.exports = {
  login: login,
  register: register,
  test: test,
  task: task
};