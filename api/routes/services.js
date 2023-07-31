var express = require('express');
var router = express.Router();
var multer = require('multer');

const { spawn} = require('child_process');
let pythonProcess = null;


var store = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: store }).single('file');

/* GET home page. */
router.get('/list', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/start', function (req, res, next) {
    var svcName = req.params.serviceName;
    pythonProcess = spawn('python', [svcName + '.py']);
    console.log(svcName);
    return res.status(200).json({ message: 'Service started' });
    
});

router.post('/stop', function (req, res, next) {
    var svcName = req.params.serviceName;
    if(pythonProcess){
        pythonProcess.kill();
        pythonProcess = null;
    }
    console.log(svcName);
    return res.status(200).json({ message: 'Service stopped' });
});    

module.exports = router;
