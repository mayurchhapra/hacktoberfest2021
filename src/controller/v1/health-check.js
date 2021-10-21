exports.getData = (req, res, next) => {
  res
    .status(200)
    .json({
      name: 'Your Name',
      age: 20
    });
};