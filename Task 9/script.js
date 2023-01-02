/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */

class Movie{
    constructor(title, director, budget){
        this.title=title;
        this.director=director;
        this.budget=budget;
    }
    wasExpensive(){
        if(this.budget>100000000){
            return true
        }else{ 
            return false}
    }
}
let movies = [
    new Movie("SpiderMan", "Stan Lee",120000000),
    new Movie("Avatar", "James Cameron",90000000)
];

//Check
console.log(movies[1].wasExpensive());
console.log(movies[0].wasExpensive());