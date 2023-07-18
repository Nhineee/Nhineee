/// => Sửa file thành dbpoperation.js

const sql = require('mssql');
const config = require('./dbconfig')

//LOGIN 
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

//REGISTER
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
        .input('username', sql.NVarChar, username)
        .input('email', sql.NVarChar, email)
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
          .input('email', sql.NVarChar, email)
          .input('username', sql.NVarChar, username)
          .input('password', sql.NVarChar, password)
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
    .query(`SELECT * FROM Task4`)

  console.log(retrieve.recordsets);
  return retrieve.recordsets;
}




/// *ADD TASK DATA* ///
async function addTask(task) {
  try {

    let pool = await sql.connect(config)
    let add = await pool.request()
      .input('taskname', sql.NVarChar, task.taskname)
      .input('description', sql.NVarChar, task.description)
      .input('status', sql.NVarChar, task.status)
      .input('due_date', sql.NVarChar, task.due_date)
      .input('priority', sql.NVarChar, task.priority)
      .input('username', sql.NVarChar, task.username)
      .input('projectname', sql.NVarChar, task.projectname)
      .input('projectdes', sql.NVarChar, task.projectdes)
      .input('start_date', sql.NVarChar, task.start_date)
      .input('end_date', sql.NVarChar, task.end_date)

      .query(
        `INSERT INTO Task4 (taskname, description, status, due_date, priority, username, projectname, projectdes, start_date, end_date) VALUES (@taskname, @description, @status, @due_date, @priority, @username,@projectname, @projectdes, @start_date, @end_date)`,
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
      .input('description', sql.NVarChar, task.description)
      .input('status', sql.NVarChar, task.status)
      .input('due_date', sql.NVarChar, task.due_date)
      .input('priority', sql.NVarChar, task.priority)
      .input('username', sql.NVarChar, task.username)
      .input('projectname', sql.NVarChar, task.projectname)
      .input('projectdes', sql.NVarChar, task.projectdes)
      .input('start_date', sql.NVarChar, task.start_date)
      .input('end_date', sql.NVarChar, task.end_date)

      .query(
        `UPDATE Task4 SET taskname = @taskname, description = @description, status = @status, due_date = @due_date, priority = @priority, username = @username, projectname = @projectname, start_date = @start_date, end_date = @end_date WHERE taskid = @taskid`
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
    .query(`DELETE FROM Task4 WHERE taskid = @taskid`)

  return del.recordsets;
}


async function test(request, response) {
  const pool = await sql.connect(config);
  const test = await pool
    .request()
    .query(`SELECT* from Task4`)

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
  getUser
}