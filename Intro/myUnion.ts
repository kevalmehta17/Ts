let score: number | string = 33;

score = 744;

type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let hitesh: User | Admin = { name: "keval", id: 55, userName:"k" };

console.log(hitesh)

function getDbId(id : number | string){
    if(typeof id === "string"){
        id.toLowerCase();
    }
}

let seatAllotment : "keval" | "tokyo" | "neo";

seatAllotment = "tokyo"
