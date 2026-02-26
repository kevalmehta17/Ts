// const user : (string | number)[] = [1, "ke"];
// let tUser:[string, number, boolean]

// tUser = ["fg", 22, true]
type User = [name: string, age: boolean];

const newUser: User = ["fg", true];
newUser.push(11)
console.log("newUser", newUser)

export {};                   
