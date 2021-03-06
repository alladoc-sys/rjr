import jwt, { decode } from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || "somethingsecret",
    {
      expiresIn: "30d",
    }
  );
};

export const isAuth = (req, res, next) => {
  //console.log("utils.js isAuth 1");
  const authorization = req.headers.authorization;
  if (authorization) {
   // console.log("utils.js isAuth 2");
    const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
    jwt.verify(
      token,
      process.env.JWT_SECRET || "somethingsecret",
      (err, decode) => {
        if (err) {
         // console.log("utils.js isAuth 3");
          res.status(401).send({ message: "Invalid Token" });
        } else {
         // console.log("utils.js isAuth 4");
          req.user = decode;
          next();
        }
      }
    );
  } else {
    res.status(401).send({ message: "No Token" });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: "Invalid Admin Token" });
  }
};
// export const isSeller = (req, res, next) => {
//   if (req.user && req.user.isSeller) {
//     next();
//   } else {
//     res.status(401).send({ message: "Invalid Seller Token" });
//   }
// };
// export const isSellerOrAdmin = (req, res, next) => {
//   if (req.user && (req.user.isSeller || req.user.isAdmin)) {
//     next();
//   } else {
//     res.status(401).send({ message: "Invalid Admin/Seller Token" });
//   }
// };
