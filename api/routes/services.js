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
        return res.status(500).send({ message: 'Error fetching service list' });
      }
  
      list.forEach(process => {
        var status = process.pm2_env.status === 'online';
        var name = process.name;
        services.push({ name, status });
      });
      
      return res.status(200).send(services);
    });
  });
  
  router.post('/start', function (req, res, next) {
    var svcName = req.body.serviceName;
    var path = fileDir + '\\' + svcName;
  
    pm2.start({
      script: path,
      name: svcName
    }, function (err, apps) {
      if (err) {
        console.log(err);
        return res.status(500).send({ message: 'Error starting service' });
      }

      var serviceToUpdate = services.find(service => service.name === svcName);
      if (serviceToUpdate) {
        serviceToUpdate.status = true;
      }
  
      return res.status(200).send(services);
    });
  });
  
  router.post('/stop', function (req, res, next) {
    var svcName = req.body.serviceName;
    var path = fileDir + '\\' + svcName;
  
    pm2.stop(svcName, function (err, apps) {
      if (err) {
        console.log(err);
        return res.status(500).send({ message: 'Error stopping service' });
      }
  
      var serviceToUpdate = services.find(service => service.name === svcName);
      if (serviceToUpdate) {
        serviceToUpdate.status = false;
      }
  
      return res.status(200).send(services);
    });
  });

  router.post('/downloadConfig', function (req, res, next) {
    file = req.body.serviceName + '_config.json';
    filePath = fileDir + '\\';
    filePath = filePath + file;
    res.sendFile(filePath);
  });
  

function getFiles(directoryPath, extension) {
    const files = fs.readdirSync(directoryPath);
    const filteredFiles = files.filter(file => path.extname(file) === extension);
    return filteredFiles;
}
module.exports = router;
