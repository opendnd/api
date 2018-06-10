const optAuth = (middleware) => {
  return (req, res, next) => {
    if (req.headers.authorization) {
      return middleware(req, res, () => {
        return next();
      });
    } else {
      return next();
    }
  };
};

module.exports = optAuth;
