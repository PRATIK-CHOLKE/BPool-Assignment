const express = require('express');
const fileUpload = require('express-fileupload');
const pdfParse = require('pdf-parse');
const mongoose = require('mongoose');
const User = require('./models/userSchema')

const app = express();
var cors = require('cors');


const DB = 'mongodb+srv://pratikcholke:9028136282@cluster0.kidht.mongodb.net/userdetails?retryWrites=true&w=majority'
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUniFiedTopology: true,
    useFindAndModify: false
}).then( () => {
 console.log(`Server connected`)
}).catch( (err) => console.log('Connection Failure'));

//app.use("/", express.static("public"));
app.use(fileUpload());

app.use(cors({
    origin: 'http://localhost:3000'
  }))


// Home page
app.get('/', (req, res) => {
    res.redirect("http://localhost:3000/upload");
})

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

// app.post("/extract-text", (req, res) => {
//     if (!req.files && !req.files.pdfFile) {
//         res.status(400);
//         res.end();
//     }

//     pdfParse(req.files.pdfFile).then(result => {
//         res.send(result.info);
//     });
// });

app.listen(5000, () => console.log('Server Started...'));
