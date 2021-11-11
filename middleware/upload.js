/* const multer = require('multer');
const MulterGridfsStorage = require('multer-gridfs-storage');
require('dotenv').config();
 */

import multer from "multer";
import MulterGridfsStorage from "multer-gridfs-storage";
import {} from "dotenv/config";


const storage = new MulterGridfsStorage({
    url: process.env.MONGODB_URI,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (_req, file) => {
        const match = ["image/png", "image/jpeg"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-any-name-${file.originalname}`;
            return filename;
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-any-name-${file.originalname}`,
        };
    },
});

/* module.exports = multer({ storage }); */
const multerExport = multer({ storage });
export default multerExport;
