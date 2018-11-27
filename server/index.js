const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

/** API controllers */
const gradesRoutes = require('./routes/grades.routes');

// configure express app;
const app = express();
app.use(morgan('tiny'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// hook up API routes
app.use('/api/grading', gradesRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT);
console.log(`API Server is running on port ${PORT}`);