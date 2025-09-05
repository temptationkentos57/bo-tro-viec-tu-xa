const User = require('../models/User');

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });
  await newUser.save();
  res.status(201).send('Người dùng đã được tạo!');
};