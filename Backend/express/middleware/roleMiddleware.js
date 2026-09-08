const checkrole = (...allowedroles) => {
  return (req, res, next) => {
    const role = req.headers.role;

    if (!role) {
      return res.status(403).json({ message: "Role is not provided" });
    }

    if (allowedroles.includes(role)) {
      return next();
    }

    return res.status(403).json({ message: "Role is not allowed" });
  };
};

export default checkrole;