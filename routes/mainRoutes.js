const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

router.get('/dashboard', authMiddleware, (req, res) => {
  res.render('dashboard', { user: req.session.user });
});

router.get('/admin', authMiddleware, roleMiddleware('admin'), (req, res) => {
  res.render('admin', { user: req.session.user });
});

router.get('/user', authMiddleware, roleMiddleware('user'), (req, res) => {
  res.render('dashboard', { user: req.session.user });
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', (req, res) => {
  const { username, role } = req.body;
  req.session.user = { username, role };
  res.redirect('/dashboard');
});

module.exports = router;
