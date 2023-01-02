/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const results = document.getElementById("output");


fetch(ENDPOINT)
    .then(res=>res.json())
    .then(data =>{
        console.log(data);
        data.forEach(item=>{
            results.innerHTML+=`
            <div>
                <h1><span>Gamintojas:</span> ${item.brand}</h1>
                <p><span>Pagaminti Modeliai:</span> ${item.models}</p>
            </div>
            `
        })
    })