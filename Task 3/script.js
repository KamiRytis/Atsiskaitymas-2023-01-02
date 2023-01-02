/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const userCard= document.getElementById("output");
const button = document.getElementById("btn");
const message = document.getElementById("message");


button.addEventListener("click",e =>{
    e.preventDefault();
    userCard.innerHTML="";
    message.classList.add("display")
    fetch(ENDPOINT)
    .then(res=>res.json())
    .then(data=> {
        console.log(data[0]);
        data.forEach(user=> userCard.innerHTML+=`
        <div>
            <img src=${user.avatar_url}>
            <p>${user.login}</p>
        </div>
        `)
    })
})
