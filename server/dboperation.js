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

async function getTask() {
  let pool = await sql.connect(config)
  let retrieve = await pool.request()
    .query(`SELECT * FROM Task5`)

  console.log(retrieve.recordsets);
  return retrieve.recordsets;
}


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
      .input('role', sql.NVarChar, task.role)
      .input('projectname', sql.NVarChar, task.projectname)
      .input('projectdes', sql.NVarChar, task.projectdes)
      .input('start_date', sql.NVarChar, task.start_date)
      .input('end_date', sql.NVarChar, task.end_date)

      .query(
        `INSERT INTO Task5 (taskname, description, status, due_date, priority, username, role, projectname, projectdes, start_date, end_date) VALUES (@taskname, @description, @status, @due_date, @priority, @username, @role, @projectname, @projectdes, @start_date, @end_date)`,
      )
    return add.recordsets;

  } catch (error) {
    console.log(error);
  }
}


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
      .input('role', sql.NVarChar, task.role)
      .input('projectname', sql.NVarChar, task.projectname)
      .input('projectdes', sql.NVarChar, task.projectdes)
      .input('start_date', sql.NVarChar, task.start_date)
      .input('end_date', sql.NVarChar, task.end_date)

      .query(
        `UPDATE Task5 SET taskname = @taskname, description = @description, status = @status, due_date = @due_date, priority = @priority, username = @username, role = @role, projectname = @projectname, start_date = @start_date, end_date = @end_date WHERE taskid = @taskid`
      )
    return update.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function delTask(taskid) {
  let pool = await sql.connect(config)
  let del = await pool.request()
    .input('taskid', sql.Int, taskid)
    .query(`DELETE FROM taskss WHERE taskid = @taskid`)

  return del.recordsets;
}

async function updateUser(id, user) {
  try {
    let pool = await sql.connect(config)
    let update = await pool.request()
      .input('id', sql.Int, id)
      .input('email', sql.NVarChar, user.email)
      .input('username', sql.NVarChar, user.username)
      .input('password', sql.NVarChar, user.password)

      .query(
        `UPDATE users SET email = @email , username = @username, password = @password WHERE id = @id`
      )

    return update.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getUser() {
  let pool = await sql.connect(config)
  let retrieve = await pool.request()
    .query(`SELECT * FROM users`)

  console.log(retrieve.recordsets);
  return retrieve.recordsets;
}

async function delUser(id) {
  let pool = await sql.connect(config)
  let del = await pool.request()
    .input('id', sql.Int, id)
    .query(`DELETE FROM users WHERE id = @id`)

  return del.recordsets;
}

async function getCom() {
  let pool = await sql.connect(config)
  let retrieve = await pool.request()
    .query(`SELECT * FROM Commentt`)

  console.log(retrieve.recordsets);
  return retrieve.recordsets;
}

async function addCom(com) {
  try {

    let pool = await sql.connect(config)
    let add = await pool.request()
      .input('contentt', sql.NVarChar, com.contentt)
      .input('taskname', sql.NVarChar, com.taskname)
      .input('username', sql.NVarChar, com.username)
      .query(
        `INSERT INTO Commentt (contentt, taskname, username) VALUES (@contentt, @taskname, @username)`
      )

    return add.recordsets;

  } catch (error) {
    console.log(error);
  }
}

async function updateCom(comid, com) {
  try {
    let pool = await sql.connect(config)
    let update = await pool.request()
      .input('comid', sql.Int, comid)
      .input('contentt', sql.NVarChar, com.contentt)
      .input('taskname', sql.NVarChar, com.taskname)
      .input('username', sql.NVarChar, com.username)

      .query(
        `UPDATE Commentt SET contentt = @contentt , taskname = @taskname ,username = @username WHERE comid = @comid`
      )

    return update.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function delCom(comid) {
  let pool = await sql.connect(config)
  let del = await pool.request()
    .input('comid', sql.Int, comid)
    .query(`DELETE FROM Commentt WHERE comid = @comid`)

  return del.recordsets;
}

async function test(request, response) {
  const pool = await sql.connect(config);
  const test = await pool
    .request()
    // .query(`SELECT * from users`);
    .query(`SELECT* from Task5`)

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
  getUser,
  updateUser,
  delUser,
  getCom,
  addCom,
  updateCom,
  delCom
}
