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
    }
}