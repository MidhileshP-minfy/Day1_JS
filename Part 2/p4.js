let scores = [25, 80, 45, 95, 60, 75];
const sum_score=scores.reduce(function(acc,score){
    return acc+score;
},0)
console.log(sum_score/(scores.length));