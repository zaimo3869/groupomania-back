const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token === "undefined") {
    res.status(401).json("Requête non-authentifiée !");
  } else {
    try {
      const decodedToken = jwt.verify(token, `${process.env.TOKEN_KEY}`);
      const userId = decodedToken.userId;
      res.userId = userId;
      if (req.body.userId && req.body.userId !== userId) {
        console.log("Utilisateur non autorisé à supprimer / modifier");
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
      console.log({ error: error | "Requête non-authentifiée !" });
    }
  }}
