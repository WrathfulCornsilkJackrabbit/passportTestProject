/**
 * Imports
 */
const express = require('express');

/**
 * Global declarations
 */
const app = express();
const users = [];

/**
 * Server Routes
 */
app.get('/', (req, res) => {
  res.render('index.ejs', { name: 'Alexio' });
});

app.get('/login', (req, res) => {
  res.render('login.ejs');
});
app.post('/login', (req, res) => {
  console.log('Login successfully');
});

app.get('/register', (req, res) => {
  res.render('register.ejs');
});
app.post('/register', (req, res) => {
  req.body.name;
});

/**
 * Server Settings
 */
app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.listen(3000);
