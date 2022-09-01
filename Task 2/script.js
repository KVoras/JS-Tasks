/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

document.querySelector("#btn__element").addEventListener("click", addOne);
let counter = btn__state.innerText;
function addOne() {
  counter++;
  btn__state.innerText = counter;
}
