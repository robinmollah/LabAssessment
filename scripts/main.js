let { exec } = require('child_process');
const fs = require('fs');

module.exports.fs = {
    dir: function(path = require('os').homedir()){
        return new Promise((resolve, reject) => {
            fs.readdir(path, (err, items) => {
                if(err) reject("Cannot read folder");
                resolve(items);
            })
        });

    }
};

module.exports.test = function test(file_name) {
    return true;
};

module.exports.compile = function compile(file_path){
    return new Promise(resolve => {
        // TODO extract file_name & working directory from path
        exec('javac ' + file_path,{cwd: 'R:\\TheMagicians\\'}, function (error, stdout, stderr){
            // TODO send successful message
            resolve([error, stdout, stderr]);
        });
    });
};

module.exports.run = function run(file_path){
    return new Promise(resolve => {
        // TODO extract file_name and working_directory from path
        // TODO check if already compiled or compile first
        exec('java ' + 'SquareTest', {cwd: 'R:\\TheMagicians\\'},
            (error, stdout, stderr) => {
            resolve([error, stdout, stderr]);
        });
    });
};