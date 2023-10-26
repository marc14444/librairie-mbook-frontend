const cpt = JSON.parse(localStorage.getItem("panier"));

let html = "";

function afficher(){
    //console.log(cpt, typeof cpt);

    cpt.forEach(element => {
        html += `
        <div class="grand-parents">
        
        <div class="card-ajout2">${element.nom}</div>
        <div class="card-ajout"><img src="${element.image}" alt="image de l'article"></div>
        <div class="card-ajout1">${element.prix}</div><br>
        <button class="mon-boutton" id="${element.id}">Rétirer</button>
        <br><br>
        </div>
        `
    });
    document.querySelector('.mes-element').innerHTML = html;
}
afficher();

const retirer = document.querySelectorAll(".mon-boutton");

retirer.forEach(element => element.addEventListener("click", (e)=>{
    const id = e.target.id;
    const panier = JSON.parse(localStorage.panier).filter(element => element.id != id);
    localStorage.setItem("panier", JSON.stringify(panier));
    e.target.closest("div").remove();

}));
