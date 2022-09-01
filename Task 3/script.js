/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

document.getElementById("btn").addEventListener("click", printUsers);

function printUsers() {
  let output = document.getElementById("output");
  output.style.display = "grid";
  output.style.gridTemplateColumns = "25% 25% 25% 25%";
  fetch(ENDPOINT)
    .then((res) => res.json())

    .then((json) => {
      json.forEach((user) => {
        let card = document.createElement("div");
        card.style.textAlign = "center";
        card.style.padding = "3px";
        card.style.margin = "2px";
        card.style.border = "solid grey";
        card.style.borderRadius = "5px";

        let userAvatar = document.createElement("img");
        userAvatar.src = user.avatar_url;
        userAvatar.alt = "User Avatar";
        userAvatar.style.width = "100%";

        let userName = document.createElement("h4");
        userName.innerText += user.login;

        card.appendChild(userAvatar);

        card.appendChild(userName);

        output.appendChild(card);

        const message = document.getElementById("message");
        message.style.display = "none";
      });
    });
}
