const express = require('express');
const fileUpload = require('express-fileupload');
const pdfParse = require('pdf-parse');

const app = express();
var cors = require('cors');

app.use("/", express.static("public"));
app.use(fileUpload());

app.use(cors({
    origin: 'http://localhost:3000'
  }))

app.post('/upload', (req, res) => {
    if(req.files === null){
        return res.status(400).json({msg: 'No File uploaded'});
    }
    const file = req.files.file;

    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
        if(err){
            console.error(err);
            return res.status(500).send(err);
        }
        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
});

app.post("/extract-text", (req, res) => {
    if (!req.files && !req.files.pdfFile) {
        res.status(400);
        res.end();
    }

    pdfParse(req.files.pdfFile).then(result => {
        res.send(result.info);
    });
});

app.listen(5000, () => console.log('Server Started...'));
