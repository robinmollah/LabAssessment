var main = require('./main');

(
    async () => {
        let out = await main.fs.dir();
        console.log("Compile", out);
        console.log("text" + require('os').homedir());
    }
)();
