require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const userRoutes = require('./src/routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Kết nối đến cơ sở dữ liệu
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});