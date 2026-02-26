function addTwo(num: number): number {
  return num + 2;
  // return "hello"
}
// let fnVal = addTwo();
function getUpper(val: string): string {
  return val.toUpperCase();
}
function signUpUser(
  name: string,
  email: string,
  password: string,
  isPaid: boolean,
) {}

let loginUser = (name: string, email: string, age: number = 33) => {};

loginUser("keval", "kkeval");

signUpUser("k", "sf", "sf", true);

getUpper("keval");
addTwo(5);

function getValue(myVal: number): string | boolean {
  if (myVal > 5) {
    return true;
  }
  return "200 ok";
}
const getHello = (s: string): string => {
  return "";
};

// const heros = [1, 2, 3];
const heros = ["thor", "spiderMan", "ironMan"];

const newMap = heros.map((hero : string):number => {
    return 1;
})
console.log(newMap);


function consoleError(errmsg : string) : never{
    if(errmsg){
        console.log(errmsg);
    }
    throw new Error(errmsg);

}

function test(): string {
  throw new Error("fail");
}
consoleError("error message");
export {};
