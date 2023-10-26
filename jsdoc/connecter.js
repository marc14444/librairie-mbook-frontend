let userCon = JSON.parse(localStorage.session);
let balise = document.getElementById("affich");
console.log(userCon.nom)
balise.innerText = userCon.nom;

//deconnexion
function logout() {
    localStorage.removeItem("session");
}