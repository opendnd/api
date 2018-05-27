// userID middleware
const addUserMeta = (req, res, next) => {
  const { AUTH0_NAMESPACE } = process.env;
  req.userID = req.user.sub;
  req.permissions = req.user[`${AUTH0_NAMESPACE}permissions`];
  req.groups = req.user[`${AUTH0_NAMESPACE}groups`];
  req.roles = req.user[`${AUTH0_NAMESPACE}roles`];
  const groupIndex = req.headers['x-group-index'] || 0;
  req.groupID = req.groups[groupIndex];
  return next();
};

module.exports = addUserMeta;
