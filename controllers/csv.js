const multer = require('multer');
const fs = require('fs');
const csv = require('csv-parser');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        return cb(null, './public')
    },
    filename: function(req,file,cb){
        return cb(null, file.originalname)
    }
})

const upload = multer({storage}).single('file')
exports.saveCSV = function(req, res){
    upload(req, res, function(err){
        res.sendStatus(200);
    })
}

exports.listCSV = function(req,res){
    try {
        const results = [];
        fs.createReadStream('public/' + req.query.filename) // Update the path to your CSV file
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.json(results);
        });
    } catch (error) {
        console.error('Error reading CSV file:', error);
        // res.status(500).json({ error: 'Internal server error' });
    }
    // res.sendStatus(200)
}