const main = require('./main');

main.test().then(response => {
    console.log(response.stdout);
}).catch(error => {
    console.error(error)
});