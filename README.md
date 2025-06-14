## Part 1
### Task 1
```js
const favoriteFood="Roti & Curry";
console.log(favoriteFood);
```
### Output:
![Screenshot 2025-06-14 122728](https://github.com/user-attachments/assets/fcc450f8-1f0d-46c4-a121-59924881d8aa)
### Task 2
```js
let numA=10;
let numB=13;
if (numA>numB){
    console.log(`${numA} is larger`);
} 
else if (numA<numB) 
{
    console.log(`${numB} is larger`);
}
```
### Output:
![Screenshot 2025-06-14 122927](https://github.com/user-attachments/assets/ae8f797d-4bf6-4773-88a3-2dbc64ac740a)
### Task 3
```js
for (let num=1;num<=20;num++)
{
    if(num%3==0 && num%5==0)
    {
        console.log("FizzBuzz");
        continue;
    }
    else if(num%3==0)
    {
        console.log("Fizz");
        continue;
    }
    else if(num%5==0)
    {
        console.log("Buzz");
        continue;
    }}
```
### Output:
![Screenshot 2025-06-14 123043](https://github.com/user-attachments/assets/5ee82302-94fa-4cc2-a4b6-beedd76c3850)
## Part 2
###Task 1
```js
let colors=["Red","Blue","White"];
colors.push("Black");
colors.unshift("Green");
console.log(colors);
```
### Output:
![Screenshot 2025-06-14 123133](https://github.com/user-attachments/assets/925dc432-2215-40df-9cf9-ad200ac7f026)
### Task 2
```js
let numbers = [10, 20, 30, 40, 50];
const increased_array=numbers.map(function(x){
    return x+5;

});
console.log(increased_array);
```
### Output:
![Screenshot 2025-06-14 123323](https://github.com/user-attachments/assets/24a736ee-613d-4a7f-afda-7c0d4bf741ce)
### Task 3
```js
let scores = [25, 80, 45, 95, 60, 75];
const higher_scores=scores.filter(function(score){
    return score>70;
})
console.log(higher_scores);
```
### Output:
![Screenshot 2025-06-14 123350](https://github.com/user-attachments/assets/f1181384-277c-4088-855c-dfa6d91d34f0)

### Task 4
```js
let scores = [25, 80, 45, 95, 60, 75];
const sum_score=scores.reduce(function(acc,score){
    return acc+score;
},0)
console.log(sum_score/(scores.length));
```
### Output:
![Screenshot 2025-06-14 123415](https://github.com/user-attachments/assets/0ebee8ed-7ccf-490c-be6f-f51eeb20e639)
## part 3
### Task 1

```js
let movie={
    title:"Mission Impoosible:Final Reckoning",
    director:"Christopher McQuarrie",
    release_Year:2025
};
console.log(movie.title);
```
### Output:
![Screenshot 2025-06-14 123519](https://github.com/user-attachments/assets/6c5c45eb-bc6c-4dec-90ac-ffdfc6edff7e)

### Task 2
```js
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

```
### Output:
![Screenshot 2025-06-14 123553](https://github.com/user-attachments/assets/0b9db9ff-8689-4564-9fa8-ce5b99d04a52)
### Task 3
```js
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
```
### Output:
![Screenshot 2025-06-14 123626](https://github.com/user-attachments/assets/498d6359-dc6e-4b12-883b-5294f1b8e58b)
## part 4
### Task 1
```js
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
```
### Output:
![image](https://github.com/user-attachments/assets/773d716a-a7fb-4d98-8517-ada2f4957c62)

### Task 2
#### HTML Code `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css" />
    <title>Guess The Number Game</title>
</head>
<body>

    <h1>Guess The Number (1 to 10)</h1>
    <div class="container">
        <input type="number" id="numberInput" min="1" max="10" />
        <button onclick="makeGuess()">Guess</button>
        <div class="message" id="message"></div>
    </div>

    <script src="p2.js"></script>

</body>
</html>

```
#### CSS Code `style.css`
```css
body {
            font-family: Arial, sans-serif;
            background: #f2f2f2;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }
        h1 {
            color: #333;
        }
        .container {
            background: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
        }
        input[type="number"] {
            padding: 10px;
            width: 60px;
            margin-right: 10px;
            font-size: 16px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
        .message {
            margin-top: 20px;
            font-weight: bold;
            font-size: 18px;
            display: flex;
            justify-content: center;

        }
```
#### JSON File `p2.js`
```js
function createGame(){
    let secretNumber=Math.floor(Math.random()*10)+1;
    console.log(secretNumber);
    return function guess(number){
        if (number>secretNumber){
            return("Too High!");
        }
        else if (number<secretNumber){
            return("Too Low!");
        }
        else if (number===secretNumber){
            return("You guessed it!");
        }
    }
}
const play=createGame();

function makeGuess() {
            const input=document.getElementById("numberInput");
            const number=parseInt(input.value);
            const message=play(number);
            document.getElementById("message").textContent=message;
        }
```
### Output:
![Screenshot 2025-06-14 124024](https://github.com/user-attachments/assets/3b4f6ffa-8da7-4b03-bdb6-96c2490ba73d)
![Screenshot 2025-06-14 124038](https://github.com/user-attachments/assets/e80546b1-f081-4d7d-829c-e0db3231c5bc)
![Screenshot 2025-06-14 124050](https://github.com/user-attachments/assets/629aa41d-f726-4b1d-aeba-9ee1c413a333)
![Screenshot 2025-06-14 124114](https://github.com/user-attachments/assets/9a1eee97-9303-4b48-9c94-8cf0b69b4cf8)

