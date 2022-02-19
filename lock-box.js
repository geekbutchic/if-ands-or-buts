const prompt = require("prompt-sync")({ sigint: true });

const pinCode = Number('1234');

let greet = Number(prompt("Enter a lockbox code: "));

if (greet === pinCode) {
    console.log('Success!!!');
} else {
    console.log('Failure, please try again!!!');
}

