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

let users;

fetch(ENDPOINT)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((users) => {
    console.log(users);
    users = users;
  })
  .catch((error) => {
    console.error(error);
  });

function showUsers(users) {
  const output = document.getElementById("output");
  output.innerHTML = "";

  users.forEach((user) => {
    const login = document.createElement("H3");
    login.innerText = user.login;

    const avatar = document.createElement("img");
    avatar.src = user.avatar_url;
    avatar.setAttribute("alt", "UserAvatar");

    const container = document.createElement("div");
    container.append(login, avatar);
    output.append(container);
  });
}

showUsers(users);
