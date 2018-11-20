const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;
app.get('/api/todos', (req, res) => {
  res.json({
    response: 'hello, world'
  });
});

app.listen(process.env.PORT || 4000);
console.log(`API Server is running on port ${PORT}`);