function printUserDetails(user){
    const {name,age}=user;
    console.log(`User's name is ${name}, and they are ${age} years old`);
}
const user={
    name:"Midhilesh",
    email:"midhilesh@gmail.com",
    age:22
};
printUserDetails(user);
