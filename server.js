/**
 * Imports
 */
const express = require('express');
const bcrypt = require('bcrypt');

/**
 * Global declarations
 */
const app = express();
const users = [];

/**
 * Server Settings
 */
app.set('view-engine', 'ejs');
app.listen(3000);
app.use(express.urlencoded({ extended: false }));

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
app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    res.redirect('/login');
  } catch {
    res.redirect('/register');
  }

  console.log(users);
});
