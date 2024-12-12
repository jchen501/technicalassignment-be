const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
app.use(express.json())
app.use(cors())

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        return cb(null, './public')
    },
    filename: function(req,file,cb){
        return cb(null, file.originalname)
    }
})
    
const upload = multer({storage})

app.post('/upload', upload.single('file'), (req, res) => {
    res.sendStatus(200)
});

app.listen(8080, () => console.log(`Listening on port 3000`));