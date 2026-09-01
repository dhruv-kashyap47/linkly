const jwt = require('jsonwebtoken');
const AppError = require('../utils/AppError')


const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new AppError(`Not authorized, no token provided`, 401));
  }

  const token = authHeader.split(" ")[1]; // ["Bearer", "ABC123XYZ"]

  try {
    const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
    );

    req.userId = decoded.id; // is line ka kaam hai ki decoded token se user ka id nikal ke req object me store kar de, taki aage ke middleware ya route handlers me use kiya ja sake.

    next();
  } catch (error){
    return next(new AppError(`Not authorized, token invalid or expired`, 401));
  }
};

const optionalAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.id;
    } catch (error) {
      // invalid token, but we don't block — just proceed as a guest
    }
  }

  next();
};

module.exports = { protect, optionalAuth };
