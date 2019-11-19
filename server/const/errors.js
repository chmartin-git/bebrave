
const chalk = require("chalk");
const fs = require("fs");

const errors = {
    "bad-data": {
        code: 0x1,
        message: " There is a problem in your request. "
    },
    "taken-pseudo": {
        code: 0x2,
        message: " This pseudo is already exists in the database ! "
    },
    "bad-password": {
        code: 0x3,
        message: "Your password has to be (minimum) 6 characters long. "
    },
    "taken-email": {
        code: 0x4,
        message: " This email already exists in the database ! "
    },
    "unknown": {
        code: 0xff,
        message: " Unknown error : "
    },
    "user-created": {
        code: 0x5,
        message: " User successfully created ! "
    },
    "wrong-information": {
        code: 0xA,
        message: " Wrong password or username ! "
    },
    "token-created": {
        code: 0x7,
        message: " Token successfully created ! This token life span is 1h"
    }
};

export function log(errorTag, message = ""){
    const string = chalk.cyan(new Date().toUTCString(Date.now())) + " - " + chalk.redBright("[ 0 x " + errors[errorTag].code.toString(16).toUpperCase() + " ]")+" - " + chalk.greenBright(errors[errorTag].message + message);
    fs.writeFileSync(__dirname+"/../logs/log", string+"\r\n", {
        flag: "a"
    });
    console.log(string);
}

export default errors;
