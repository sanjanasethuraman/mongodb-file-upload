/* const upload = require("../middleware/upload");
const express = require("express");
const router = express.Router(); */

import multerExport from "../middleware/upload.js";
import express from "express";
const router = express.Router();

/* router.post("/upload", upload.single("file"), async (req, res) => {
    if (req.file === undefined) return res.send("you must select a file.");
    const imgUrl = `http://localhost:${process.env.PORT}/file/${req.file.filename}`;
    return res.send(imgUrl);
}); */

router.post("/", multerExport.single("file"), async (req, res) => {
    if (req.file === undefined) return res.send("you must select a file.");
    const imgUrl = `http://localhost:${process.env.PORT}/file/${req.file.filename}`;
    return res.send(imgUrl);
});

/* module.exports = router; */
export default router;
