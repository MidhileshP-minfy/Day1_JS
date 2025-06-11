let scores = [25, 80, 45, 95, 60, 75];
const higher_scores=scores.filter(function(score){
    return score>70;
})
console.log(higher_scores);