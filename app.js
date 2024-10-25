const express = require('express');
const session = require('express-session');
const config = require('./config/config');
const mainRoutes = require('./routes/mainRoutes');

const app = express();

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: true,
}));

// Set view engine
app.set('view engine', 'ejs');

// Use main routes
app.use('/', mainRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
