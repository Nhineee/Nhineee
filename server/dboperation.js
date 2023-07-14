const sql = require('mssql');
const config = require('./dbconfig')

async function login(request, response) {
  try {
    const {
      username,
      password
    } = request.body;

    if (username == null || password == null) {
      return response.status(401).send('Please enter username and password');
    } else {
      const pool = await sql.connect(config);
      const result = await pool
        .request()
        .input('username', sql.VarChar, username)
        .query(`SELECT password from users where username = @username`);

      const storedPassword = result.recordset[0].password;

      if (result.recordset[0].length === 0) {
        return response.status(404).send('User does not exist')
      } else if (result.recordset[0].password != password) {
        return response.status(403).send('Wrong password');
      } else {
        return response.status(200).send('Login Success');
      }
    }
  } catch (error) {
    console.error(error);
    return response.status(500).send('Internal Server Error');
  }
}

async function register(request, response) {
  try {
    const {
      email,
      username,
      password
    } = request.body;

    if (typeof email === 'undefined' || typeof username === 'undefined' || typeof password === 'undefined') {
      return response.status(401).send('Please fill in all required information');
    } else {
      const pool = await sql.connect(config);

      const checkUserQuery = `
          SELECT * FROM users WHERE username = @username OR email = @email
        `;
      const checkUserResult = await pool
        .request()
        .input('username', sql.VarChar, username)
        .input('email', sql.VarChar, email)
        .query(checkUserQuery);

      if (checkUserResult.recordset.length > 0) {
        return response.status(409).send('User already exists');
      } else {
        const insertUserQuery = `
            INSERT INTO users (email, username, password)
            VALUES (@email, @username, @password)
          `;
        const insertUserResult = await pool
          .request()
          .input('email', sql.VarChar, email)
          .input('username', sql.VarChar, username)
          .input('password', sql.VarChar, password)
          .query(insertUserQuery);

        return response.status(200).send(`Welcome ${username}`);
      }
    }
  } catch (error) {
    console.error(error);
    return response.status(500).send('Internal Server Error');
  }
}


/// *GET TASK DATA* ///
async function getTask() {
  let pool = await sql.connect(config)
  let retrieve = await pool.request()
    .query(`SELECT * FROM taskss`)

  console.log(retrieve.recordsets);
  return retrieve.recordsets;
}

/// *ADD TASK DATA* ///
async function addTask(task) {
  try {

    let pool = await sql.connect(config)
    let add = await pool.request()
      .input('taskname', sql.NVarChar, task.taskname)
      .input('assigneel', sql.NVarChar, task.assigneel)
      .input('description', sql.NVarChar, task.description)
      .input('dueday', sql.NVarChar, task.dueday)
      .query(
        `INSERT INTO taskss (taskname, assigneel, description, dueday) VALUES (@taskname, @assigneel, @description, @dueday)`
      )

    return add.recordsets;

  } catch (error) {
    console.log(error);
  }
}
/// *UPDATE TASK DATA* ///
async function updateTask(taskid, task) {
  try {
    let pool = await sql.connect(config)
    let update = await pool.request()
      .input('taskid', sql.Int, taskid)
      .input('taskname', sql.NVarChar, task.taskname)
      .input('assigneel', sql.NVarChar, task.assigneel)
      .input('description', sql.NVarChar, task.description)
      .input('dueday', sql.NVarChar, task.dueday)
      .query(
        `UPDATE taskss SET taskname = @taskname, assigneel = @assigneel, description = @description, dueday = @dueday WHERE taskid = @taskid`
      )

    return update.recordsets;
  } catch (error) {
    console.log(error);
  }
}
/// *DELETE TASK DATA* ///
async function delTask(taskid) {
  let pool = await sql.connect(config)
  let del = await pool.request()
    .input('taskid', sql.Int, taskid)
    .query(`DELETE FROM taskss WHERE taskid = @taskid`)

  return del.recordsets;
}
async function test(request, response) {
  const pool = await sql.connect(config);
  const test = await pool
    .request()
    // .query(`SELECT * from users`);
    .query(`SELECT* from taskss`)

  return test.recordset;
}



module.exports = {
  login,
  register,
  test,
  addTask,
  getTask,
  delTask,
  updateTask,
}