const jwt = require("jsonwebtoken");
require("dotenv").config();
const con = require("../config/config")
const mysql = require('mysql');

module.exports = (req, res, next) => {
  console.log(req);
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, `${process.env.TOKEN_KEY}`);
    const userId = decodedToken.userId;

    const string = "select isAdmin from users where id = ?";
    // if (req.body.userId && req.body.userId !== userId) {
    //   res.status(401).json("Utilisateur non autorisé à supprimer / modifier");
    // } else {
    //   next();
    // }
    const inserts = userId
    const sql = mysql.format(string, inserts);
    const createPost = con.query(sql, [userId],(error, result ) => {
        if (result) {
            res.isAdmin = result;
        } else {
          next()
        }
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: error | "Requête non-authentifiée !" });
  }
};
