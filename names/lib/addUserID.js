// userID middleware
const addUserID = (req, res, next) => {
  req.userID = req.user.sub;
  return next();
};

module.exports = addUserID;
