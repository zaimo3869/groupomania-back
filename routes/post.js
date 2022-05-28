const express = require('express');
const router = express.Router();

const usersCtrl = require("../controllers/user")
const postCtrl = require('../controllers/post');

const authentification = require('../middleware/authentification');
const multer = require('../middleware/multer');
const admin = require("../middleware/checkAdmin")

//-------------------recupereration---------------
router.get('/posts',authentification,postCtrl.getAllPosts);
router.post('/comments', postCtrl.getOneComment);
router.post('/users', postCtrl.getOneUser);

// router.post('/', usersCtrl.userSignup);
// router.post('/admin', postCtrl.adminC);

//-------------------Create post/comment---------------

router.post('/post', multer,postCtrl.getOneComment);
router.post('/post/comments',authentification,multer, postCtrl.createComment);

//-------------------Recuper un post---------------

router.post('/post/:id',authentification,postCtrl.getOnePost);

//-------------------Modifier un post---------------

router.put('/post/:id/modify',authentification,multer,postCtrl.updatePost)

//-------------------Creer un post---------------

router.post('/upload/',authentification,multer,postCtrl.createPost);
// router.post('/',authentification,multer, saucesCtrl.createSauce);
// router.put('/:id',authentification,multer, saucesCtrl.modifySauce);


//-------------------Supprimer ---------------

router.post('/delete',authentification,postCtrl.deletePost);
router.post('/delete/com',authentification,postCtrl.deleteCom);
router.post('/delete/user',authentification,postCtrl.deleteUser);

module.exports = router;