exports.getData = (req, res, next) => {
  res
    .status(200)
    .json({
      status: 'success',
      method: req.method,
      endpoint: req.originalUrl,
      data: {
        name: 'Mayur Chhapra',
        age: 25
      }
    });
};