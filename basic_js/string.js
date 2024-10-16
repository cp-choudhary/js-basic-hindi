let userOne = {
    email: "cpchoudhary@gmail.com",
    insta: "innocent_04"
}

let userTwo = userOne
userTwo.email = "cpjatt@gmail.com"

console.log(userTwo.email);
console.log(userOne.email);
