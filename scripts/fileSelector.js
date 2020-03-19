const homedir = require('os').homedir();
console.log(homedir);

const fs = require('fs');

fs.readdir(homedir, (err, files) => {
    files.forEach(file => {
        console.log(file);
    });
});