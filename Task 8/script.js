/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator{
    sum(number1,number2){
        return number1+number2;
    }
    substraction(number1,number2){
        return number1-number2;
    }
    multiplication(number1,number2){
        return number1*number2;
    }
    division(number1,number2){
        return number1/number2;
    }
}

let operation = new Calculator();



// Checks
console.log(operation.sum(5,9));
console.log(operation.substraction(7,3));
console.log(operation.multiplication(3,2));
console.log(operation.division(9,3));