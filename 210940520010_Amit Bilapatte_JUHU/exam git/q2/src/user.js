
const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "project1",
};

const showmsg = async () => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  let sql = `SELECT * FROM MESSAGE`;

  const list = await connection.queryAsync(sql, []);

  await connection.endAsync();
  return list;
};

const msg = async (MESSAGE) => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  let sql = `INSERT INTO user (messagebody) values (?, ?)`;
  connection.queryAsync(sql, [MESSAGE.messagebody]);
  console.log("MSG Added!");

  await connection.endAsync();
};

module.exports = { msg, showmsg };











