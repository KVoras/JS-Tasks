/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

let cars;

fetch(ENDPOINT)
  .then((res) => {
    return res.json();
  })

  .then((data) => {
    cars = data;

    showCars();
  });

function showCars() {
  const output = document.getElementById("output");

  for (const car of cars) {
    const carElement = document.createElement("div");

    carElement.style.border = "2px solid grey";
    carElement.style.marginBottom = "5px";
    carElement.style.padding = "5px";
    carElement.style.fontSize = "20px";
    carElement.style.lineHeight = "1.3";

    carElement.innerHTML = `

        Gamintojas: ${car.brand} <br><br>

        Modeliai: ${car.models.join(", ")} <br>

        `;

    output.append(carElement);
  }
}
