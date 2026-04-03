const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({ status: 'success', message: 'Hello, CloudBees Unify!' });
});

app.listen(port, () => {
  console.log(`Learning app listening on port ${port}`);
});