var main = require('./main');

(
    async () => {
        let out = await main.compile('R:\\TheMagicians\\SquareTest.java');
        console.log("Compile", out);
    }
)();
