const express = require('express');
const db = require('./db/db');

// set up express app
const app = express();

// get data from db
app.get('/api/question', (req, res) => {
    res.status(200).send({
      success: 'true',
      message: 'question retrieved successfully',
      question: db
    })
  });

  const PORT = 4001;

  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
  });
  


