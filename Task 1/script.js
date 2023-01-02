/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
let outputFunction = (input) =>{
    return `Svarais (lb) : ${input*2.2046} lb,<br>
            Gramais (g) :${input/0.0010000} g ,<br>
            Uncijomis (oz):${input*35.274} oz
    `
}
const forma =document.querySelector("#form");
forma.addEventListener("submit", e=>{
    e.preventDefault();
    let kilograms = e.target.elements.search.value;
    document.querySelector("#output").innerHTML+=`${outputFunction(kilograms)}`;
})