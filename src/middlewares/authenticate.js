require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) return reject(err);
      resolve(user);
    });
  });
};
module.exports = async (req, res, next) => {
  console.log(req.headers, "headers")
  const cookieHeader = req.headers?.cookie;
  let token = cookieHeader.split("=")[1];
  console.log(cookieHeader, "cookieheader")
  let user;
  try {
    user = await verifyToken(token);
    // console.log(user);
  } catch (error) {
    return res.status(400).send({ message: "Authorization token invalid" });
  }
  //   console.log(user)
  req.user = user.user;
//   console.log(req.user);

  //   console.log('user:', req.user);
  return next();
};
