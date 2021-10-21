const PORT = 3000

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', (req, res, next) => {
  res
    .status(200)
    .json({
      message: 'Welcome to the Hacktoberfest 2021',
      method: req.method,
      endpoint: req.originalUrl
    })
});

app.listen(PORT, () => {
  console.log('Server is running on PORT: ', PORT);
})