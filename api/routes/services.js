var express = require('express');
var router = express.Router();
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var pm2 = require('pm2');

const fileDir = "C:\\Users\\kdhingra\\OneDrive - GKSystems\\Desktop\\poc\\api\\routes";
var services = [];

// const { spawn } = require('child_process');
let pythonProcess = null;


// var store = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// });

// var upload = multer({ storage: store }).single('file');

/* GET home page. */
router.get('/list', function (req, res, next) {
    services = [];
    pm2.list(function (err, list) {
        if (err) {
            console.log(err);
        } else {
            list.forEach(process => {
                var status = false;
                if(process.pm2_env.status == 'online'){
                    var status = true;
                }
                var name = process.name;
                services.push({name, status});
            });

            console.log(services);
            return res.status(200).send(services);
        }
    });
});

function getFiles(directoryPath, extension) {
    const files = fs.readdirSync(directoryPath);
    const filteredFiles = files.filter(file => path.extname(file) === extension);
    return filteredFiles;
}

router.post('/start', function (req, res, next) {
    // var svcName = req.body.serviceName;
    // pythonProcess = spawn('python', ['s1.py']);
    // pythonProcess.stdout.on('data', (data) => {
    //     console.log(data.toString());
    // });
    // console.log(svcName);
    // pm2.start({
    //     script: path,
    //     name: name
    // }, function (err, apps) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         status = true;
    //     }
    // })
    return res.status(200).json({ message: 'Service started' });

});

// check if a python script is running
function isRunning(fileName) {

}

router.post('/stop', function (req, res, next) {
    // var svcName = req.body.serviceName;
    // if (pythonProcess) {
    //     pythonProcess.kill();
    //     pythonProcess = null;
    // }
    // console.log(svcName);
    return res.status(200).json({ message: 'Service stopped' });
});

module.exports = router;
