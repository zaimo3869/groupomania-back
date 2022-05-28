
const fs = require("fs");
//------------Cryptage------------
const bcrypt = require("bcrypt");
//------------Token------------
const jwt = require("jsonwebtoken");
//------------database------------
const con = require("../config/config")
const mysql = require('mysql');

exports.createPost = (req, res, next) => {
  let image_url= null ;

  if (req.file) {
     image_url = `${req.protocol}://${req.get("host")}/images/${
    req.file.filename
  }`;
  }
  const { Users_Id, title, message} = req.body;
  
 console.log(Users_Id, title, message,image_url);
  // Requête
  console.log(req.file);
  const string = "INSERT INTO posts (Users_Id, title, message,image_url ) VALUES ( ?,?,?,?)";
  const inserts = [ Users_Id, title, message, image_url ];
  const sql = mysql.format(string, inserts);
  const createPost = con.query(sql, (error) => {
      if (!error) {
          res.status(201).json(inserts);
      } else {
          return res.status(405).json({message:error});
      }
  });
};
exports.updatePost = (req, res, next) => {
  let image_url= null ;

// Vérification s'il y a une image dans le body
  if (req.file) {
     image_url = `${req.protocol}://${req.get("host")}/images/${
    req.file.filename
  }`;
  }
  const {  title, message, id} = req.body;

  
 
  // Requête
  const string = 
  "UPDATE posts SET title = ?, message = ?, image_url = ? WHERE id = ? ";
  const inserts = [  title, message,image_url,id];
  const sql = mysql.format(string, inserts);
  console.log(inserts);
  const createPost = con.query(sql, (error) => {
      if (!error) { 
          res.status(201).json(inserts);
      } else {
        console.log(error);
          return res.status(405).json({message:"Erreur de requête, la publication n'a pas été modifiée"});
      }
  });
};


exports.createComment = (req, res, next) => {
  let image_url= null ;

  if (req.file) {
     image_url = `${req.protocol}://${req.get("host")}/images/${
    req.file.filename
  }`;
  }
  const { fk_postId, content, UsersCom,title} = req.body;
 
  // Requête
  const string = "INSERT INTO bab (fk_postId, content, UsersCom, title, image_url) VALUES (? ,? ,? ,?, ? )";
  const inserts = [ fk_postId, content,UsersCom,title,image_url];
  const sql = mysql.format(string, inserts);
  const createPost = con.query(sql, (error) => {
      if (!error) {
          res.status(201).json(inserts);
      } else {
          return res.status(405).json({message:"Erreur de requête, la publication n'a pas été créée"});
      }
  });
};
    
exports.deletePost = (req, res, next) => {
  const {id} = req.body
  const string = "DELETE FROM posts WHERE id = ?";
  const inserts = [ id];
  const sql = mysql.format(string, inserts);
   // Requête
   const deletePost = con.query(sql, (error) => {
     if (!error) {
      res.status(200).json({message:" la publication a  été supprimer"});
     }
     else{
  
      return res.status(405).json({message:"Erreur de requête, la publication n'a pas été supprimer"});
    }
  }) 


 
};
exports.deleteUser = (req, res, next) => {
  const {id} = req.body
  const string = "DELETE FROM users WHERE id = ?";
  const inserts = [ id];
  const sql = mysql.format(string, inserts);
   // Requête
   const deletePost = con.query(sql, (error) => {
     if (!error) {
      res.status(200).json({message:" Le User a été supprimer"});
     }
     else{
  
      return res.status(405).json({message:"Erreur de requête, le User n'a pas été supprimer"});
    }
  }) 


 
};
exports.deleteCom = (req, res, next) => {
  const {id} = req.body
  const string = "DELETE from bab where id = ? ";
  const inserts = [ id];
  const sql = mysql.format(string, inserts);
   // Requête
   const deletePost = con.query(sql, (error) => {
     if (!error) {
      res.status(200).json({message:" la publication a  été supprimer"});
     }
     else{
  
      return res.status(405).json({message:"Erreur de requête, la publication n'a pas été supprimer"});
    }
  }) 


 
};


exports.getAllPosts = (req, res, next) => {
    con.query("select * from posts order by post_date desc", function (err, result) {
    res.status(200).json(result);
    })

  
};
exports.adminC = (req, res, next)=>{
const {id} = req.body
 const string = "select * from users where id = ?";
  const inserts = [ id];
  const sql = mysql.format(string, inserts);
  const createPost = con.query(sql, (error, result ) => {
    if (result) {
      res.status(202).json({message:result});
      console.log(result);
  } else {
    console.log(error);
      return res.status(405).json({message:"Erreur de requête, la publication n'a pas été créée"});
  }
});
}
exports.getOneComment = (req, res, next) => {
  const {id} = req.body
  const string = "select * from bab where fk_postId = ?";
  const inserts = [ id];
  const sql = mysql.format(string, inserts);
  const createPost = con.query(sql, (error, result ) => {
    if (result) {
        res.status(201).json(result);
    } else {
        return res.status(405).json({message:"Erreur de requête, la publication n'a pas été créée"});
    }
});


};
exports.getOnePost = (req, res,next) => {
  const { id} = req.body;
  // Requête
  const string = "SELECT * from posts where id = ? ";
  const inserts = [ id];
  const sql = mysql.format(string, inserts);
  console.log(inserts);
  const getpost = con.query(sql, (error ,result) => {
      if (result) {
          res.status(201).json(result);
      } else {
        console.log(error);
          return res.status(405).json({message:"Erreur de requête, la publication n'a pas été recuperer"});
      }
  });
};

exports.getOneUser = (req, res) => {
  const {id} = req.body
  const string = "select * from users where id = ?";
  const inserts = [ id];
  const sql = mysql.format(string, inserts);
  const createPost = con.query(sql, (error, result ) => {
    if (result) {
        res.status(201).json(result);
    } else {
        return res.status(405).json({message:"Erreur de requête, la publication n'a pas été créée"});
    }
})}