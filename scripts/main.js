let { exec } = require('child_process');

module.exports.test = function test(file_name) {
    return true;
};

module.exports.compile = function compile(file_name){
    return new Promise(resolve => {
        exec('javac ' + file_name,{cwd: 'R:\\TheMagicians\\'}, function (error, stdout, stderr){
            // TODO send successful message
            resolve([error, stdout, stderr]);
        });
    });
};

module.exports.run = function run(file_name){
    return new Promise(resolve => {
        exec('java ')
    });
};