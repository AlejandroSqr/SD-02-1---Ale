// Refer to Task 3 in your Instructions to complete this task

//Aqui cambia un poco la cosa, como se pide que este Fizz, Buzz y FizzBuzz en la lista del 1 a 105, es editor recomienda empezar desde el multiplo mas alto y llegar al mas bajo
for (let i = 1; i < 106; i++) {
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else
        console.log(i);
}
