const express = require('express');
const routes = require('./routes');
// import sequelize connection
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3001;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
