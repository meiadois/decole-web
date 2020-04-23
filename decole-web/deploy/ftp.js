require('dotenv').config()
const FtpDeployer = require('ftp-deploy');
const path = require('path');

const deployer = new FtpDeployer();
var config = {
    host: process.env.REACT_APP_FTP_HOST,
    user: process.env.REACT_APP_FTP_USER,
    password: process.env.REACT_APP_FTP_PASSWORD,
    port: process.env.REACT_APP_FTP_PORT,
    localRoot: path.join(__dirname, '..', 'build'),
    remoteRoot: process.env.REACT_APP_FTP_WEB_ROOT_PATH,
    include: ['*'],
    deleteRemote: false
}
deployer.deploy(config, function (err, res) {
    if (err) console.log(err)
    else console.log('finished:', res);
});
deployer.on("uploading", function (data) {
    data.totalFilesCount;
    data.transferredFileCount;
    data.filename;
});
deployer.on("uploaded", function (data) {
    console.log(data);
});
deployer.on("log", function (data) {
    console.log(data);
});
deployer.on("upload-error", function (data) {
    console.log(data.err);
});