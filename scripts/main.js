let { exec } = require('child_process');
const fs = require('fs');

module.exports.fs = {
    dir: function(path = require('os').homedir()){
        return new Promise((resolve, reject) => {
            console.log(path);
            fs.readdir(path, (err, items) => {
                if(err) reject(err);
                resolve(items);
            })
        });
    }
};

function compileRunners(cp, listOfJavaFiles, listOfUnitTestFiles, cwd) {
    return new Promise((resolve, reject) => {
        exec('javac -cp ' + cp + ' ' + listOfJavaFiles + ' ' + listOfUnitTestFiles,
            {cwd: cwd},
            (error, stdout, stderr) => {
                // if(stderr) reject({error: stderr});
                resolve( {
                    error: error,
                    stdout: stdout,
                    stderr: stderr
                });
            }
        )
    })
}

function runTest(cp, listOfJavaFiles, listOfUnitTestFiles, cwd) {
    return new Promise((resolve, reject) => {
        exec('java -cp ' + cp + ' org.junit.runner.JUnitCore'
            + ' ' + listOfUnitTestFiles.substring(0, listOfUnitTestFiles.length - 5),
            {cwd: cwd},
            (error, stdout, stderr) => {
                // if(stderr || error) resolve({error: stderr + " " + error});
                // else
                resolve( {
                    error: error,
                    stdout: stdout,
                    stderr: stderr
                });
            }
        )
    });
    
}

module.exports.test = function test(path) {
    return new Promise(async (resolve, reject) => {
        let cp = 'junit-4.13.jar;junit-hamcrest-core-1.3.jar;.';
        let listOfJavaFiles = 'Square.java'; // TODO Single space seperated list of .java files
        let listOfUnitTestFiles = 'TestSquare.java'; // TODO Single space seperated list of Junit files
    
        let cwd = 'R:\\TheMagicians\\WorkingDirectory\\';
        let compilationResult = await compileRunners(cp, listOfJavaFiles, listOfUnitTestFiles, cwd);
        console.log('compilationres: ', compilationResult);
    
        let testResult = await runTest(cp, listOfJavaFiles, listOfUnitTestFiles, cwd);
        resolve(testResult);
    });
};

module.exports.compile = function compile(file_path = 'R:\\TheMagicians\\WorkingDirectory\\Square.java'){
    return new Promise((resolve, reject) => {
        // TODO extract file_name & working directory from path
        let working_directory = 'R:\\TheMagicians\\WorkingDirectory\\';
        let file_name = 'Square.java';
        exec('javac ' + file_name,{cwd: working_directory}, function (error, stdout, stderr){
            // TODO send successful message
            if(!stderr) resolve({status: 'success'});
            else reject({status: 'failed', error: stderr});
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