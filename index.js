const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Chào mừng bạn đến với Bộ Trợ Giúp Từ Xa!');
});

app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});