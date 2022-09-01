/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const kg = search.value * 1;
  console.log(Number.isInteger(kg));

  if (Number.isInteger(kg)) {
    let lb = Math.round(kg * 2.2046 * 100) / 100;
    let g = Math.round((kg / 0.001) * 100) / 100;
    let oz = Math.round(kg * 35.274 * 100) / 100;
    output.innerHTML = `<div>Svarai: ${lb}</div><div>Gramai: ${g}</div><div>Uncijos: ${oz}</div>`;
  } else {
    alert("Kilogramai privalo būti išreikšti skaičiumi");
    search.value = "";
    output.innerHTML = "";
  }
});
