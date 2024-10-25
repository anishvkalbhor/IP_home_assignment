function roleMiddleware(requiredRole) {
    return (req, res, next) => {
      const user = req.session.user;
      if (user && user.role === requiredRole) {
        next();
      } else {
        res.status(403).send('Access denied.');
      }
    };
  }
  
  module.exports = roleMiddleware;
  