const express = require('express');
const morgan = require('morgan');

/** API controllers */
const gradesRoutes = require('./routes/grades.routes');

// configure express app;
const app = express();
app.use(morgan('tiny'));
app.use('/api/grading', gradesRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT);
console.log(`API Server is running on port ${PORT}`);