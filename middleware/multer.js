// Middleware Imports
const multer = require("multer");

// Middleware config.
const MIME_TYPE_MAP = {
    "image/jpg": "jpg",
    "image/jpeg": "jpeg",
    "image/png": "png",
    "image/gif": "gif",
};

const storage = multer.diskStorage({
    destination: (req, files, callback) => {
        callback(null, "images");
        console.log(files);
        console.log(req.files);
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(" ").join("_");
        const extension = MIME_TYPE_MAP[file.mimetype];
        callback(null, name + Date.now() + "." + extension);
        console.log(req.file);
        console.log(name);
    },
    
});


module.exports = multer({ storage:storage ,limits: { fieldSize: 10 * 1024 * 1024 } }).single("image");