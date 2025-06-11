function getHighAchievers(students,passingScore){
    const High_Achievers=students.filter(function(student){
        return student.score>=passingScore;
    });
    const Achievers_Names=High_Achievers.map(function(High_Achiever){
        return High_Achiever.name.toUpperCase();
    })
    console.log(Achievers_Names);
}
const students=[
    {id:1,name:"Alice",score:30},
    {id:2,name:"Bob",score:60},
    {id:3,name:"Cain",score:80},
    {id:4,name:"Don",score:90}
]
getHighAchievers(students,70);