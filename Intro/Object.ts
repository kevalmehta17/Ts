// const User = {
//   name: "keval",
//   email: "keval@gmail.com",
//   isActive: true,
// };

// function createUser({name, isPaid}:{name : string, isPaid: boolean}){
//     console.log(name, isPaid)

// }

// createUser({ name: "keval", isPaid: true })
// // function createUser():{name:string, price:number}{
// //     return {name : "react", price:222}
// // }

// type User = {
//     name:string,
//     email:string,
//     isActive:boolean
// }
// function createUser(user : User){
//     if(user.isActive){
//         console.log(user.name, user.email)
//     }
// }
// createUser({ name: "keval", email: "kjf@gmail.com", isActive: true })

// let user: {
//   readonly _id: string;

//   name: string;
//   email: string;
// };
// user = {
//     _id: "12345",
//   name: "keval",
//   email: "sgf@gmail.com",
// };

type User = {
  readonly _id: string;
  name: string;
  email: string;
  creditCardDetails?: number;
};
let myUser: User = {
    _id: "12345",
    name: "keval",
    email: "jshf@gmail.com"
}
myUser.email = "keval@gmail.com"
// myUser._id = "1234";
// console.log(myUser);

type cardNumber = {
    cardNumber : number
}

type cardDate = {
    cardDate : string
}
type cardDetail = cardNumber & cardDate & {
    cardEmail : string
};

const consumer : cardDetail = {
    cardDate : "14 Dec 2025",
    cardNumber : 1111111,
    cardEmail : "keval@gmail.com"
}

console.log(consumer);




















export {};
