/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const clicks = document.getElementById("btn__state");
const button = document.getElementById("btn__element");


let click = 0;

let clickCounterFunction = () =>{
    click +=1;
    clicks.innerHTML=click;
}


button.addEventListener("click", e=>{
    e.preventDefault();
    clickCounterFunction();
})