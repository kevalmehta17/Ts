"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"
}
// let fnVal = addTwo();
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, password, isPaid) { }
var loginUser = function (name, email, age) {
    if (age === void 0) { age = 33; }
};
loginUser("keval", "kkeval");
signUpUser("k", "sf", "sf", true);
getUpper("keval");
addTwo(5);
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 ok";
}
var getHello = function (s) {
    return "";
};
// const heros = [1, 2, 3];
var heros = ["thor", "spiderMan", "ironMan"];
var newMap = heros.map(function (hero) {
    return 1;
});
console.log(newMap);
function consoleError(errmsg) {
    if (errmsg) {
        console.log(errmsg);
    }
    throw new Error(errmsg);
}
function test() {
    throw new Error("fail");
}
consoleError("error message");
