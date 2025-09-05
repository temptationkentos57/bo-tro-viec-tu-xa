const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Đăng ký người dùng
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });
  await newUser.save();
  res.status(201).send('Người dùng đã được tạo!');
});

module.exports = router;