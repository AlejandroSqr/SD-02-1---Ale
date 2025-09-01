// Refer to Task 4 in your Instructions to complete this task
// Misma situación quen el Task 3, aqui solo se le agrega el multiplo de 7, respetando del mas alto al mas bajo
for (let i = 1; i < 106; i++) {
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 7 == 0)
        console.log("Woof");
    else if (i % 5 == 0)
        console.log("Buzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else
        console.log(i);
}
