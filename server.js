/**
 * Imports
 */
const express = require('express');

/**
 * Global declarations
 */
const app = express();

/**
 * Server Routes
 */
app.get('/', (req, res) => {
  res.render('index.ejs', { name: 'Alexio' });
});
app.get('/login', (req, res) => {
  res.render('login.ejs');
});
app.get('/register', (req, res) => {
  res.render('register.ejs');
});

/**
 * Server Settings
 */
app.set('view-engine', 'ejs');
app.listen(3000);
