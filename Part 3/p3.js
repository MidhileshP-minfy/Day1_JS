let users=[
    {id:1,username:"Salaar"},
    {id:2,username:"Varada"},
    {id:3,username:"Devarath"},
    {id:4,username:"Rajamannar"}
]

const specific_user=users.find(function(user){
    return user.id===2;
})
console.log(specific_user);