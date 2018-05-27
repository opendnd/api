const authorize = (permission) => {
  return (req, res, next) => {
    if (!req.permissions.includes(permission)) res.status(401).send('Unauthorized!');
    else next();
  };
};

module.exports = authorize;
