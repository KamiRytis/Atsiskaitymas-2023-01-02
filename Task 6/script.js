/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funkcijas, kurios atliks nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus vidurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];


//1.
let getUserAverageAge = masyvas =>{
  let ilgis = masyvas.length;
  let amziausSuma = masyvas.reduce((accumulator, currentValue) =>{
    return accumulator+currentValue.age;
  },0);
  return `Visų vartotojų amžiaus vidurkis yra ${amziausSuma/ilgis}`;
  // Galbūt logiškiau būtų naudoti tokį return: 
  //return `Visų vartotojų amžiaus vidurkis yra ${(amziausSuma/ilgis).toFixed(0)}`;, tačiau užduotyje apvalinti neprašoma.
}
//Check
console.log(getUserAverageAge(users));


//2.
let getUsersNames = masyvas =>{
  let namesList = masyvas.reduce((accumulator, currentValue) =>[...accumulator, currentValue.name],[]);
  return namesList;
}
//Check
console.log(getUsersNames(users));