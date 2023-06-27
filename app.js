const express = require("express");
const app = express();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "rds-mysql-nodejs-dev.c9rzbjkodd6m.eu-west-1.rds.amazonaws.com",
  user: "admin",
  password: "3lM7vnAsZsWDUCaIOlB44CjxgPxnkOHYLmYbP78ZpWuMxNjIrxLFGz8zjJ6erjti",
  database: "mydb",
  port: 3306,
});

try {
  if (connection.connect()) {
    app.listen(80, () =>
      console.log(`Server running on PORT: ${process.env.PORT || 80}`)
    );
  }
} catch (error) {
  console.log(`Error: ${error.message}`);
  console.log(`Unable to connect to the database.`);
}
