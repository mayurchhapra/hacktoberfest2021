const PORT = 3000

const express = require('express');
const app = express();
const route = require('./src/routes/routes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

route(app);

app.use('/', (req, res, next) => {
  res
    .status(200)
    .json({
      message: 'Hey guys! Lets start hacking!',
      method: req.method,
      endpoint: req.originalUrl
    })
});

app.listen(PORT, () => {
  console.log('Server is running on PORT: ', PORT);
})
