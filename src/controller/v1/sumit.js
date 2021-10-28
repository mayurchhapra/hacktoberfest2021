exports.getData = (req, res, next) => {
    res
      .status(200)
      .json({
        status: 'success',
        method: req.method,
        endpoint: req.originalUrl,
        data: {
          name: 'Sumit Heda',
          age: 20
        }
      });
  };
  
  exports.addValue = (req, res, next) => {
    res
      .status(200)
      .json({
        status: 'success',
        method: req.method,
        endpoint: req.originalUrl,
        data: {
          sum: req.body.a + req.body.b
        }
      })
  };
  
  exports.updateValue = (req, res, next) => {
    res
      .status(200)
      .json({
        status: 'success',
        method: req.method,
        endpoint: req.originalUrl,
        data: {
          sum: req.body.a + req.body.b
        }
      })
  }
  
  exports.deleteValue = (req, res, next) => {
    res
      .status(200)
      .json({
        status: 'success',
        method: req.method,
        endpoint: req.originalUrl
      })
  }