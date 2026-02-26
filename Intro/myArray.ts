const superHeros : string[] = []
const heroPower : number[] = [];
const testing : ReadonlyArray<number> = [1,2,3];
// testing.push(4) // This line would cause an error because testing is a readonly array

type User = {
    name : string,
    isActive : boolean
}
const allUsers : User[] = [];
allUsers.push({name : "keval" , isActive : true});
allUsers.push({name : "ganesh", isActive : false});
console.log(allUsers);

const textData : string[] = ["keval", "ganesh", "suresh"];

superHeros.push("spiderman")
heroPower.push(2)

export {}