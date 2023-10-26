let boutton = document.querySelector(".monboutton");
const count = document.querySelector(".count");
let comptePanier = JSON.parse(localStorage.getItem("panier"));

//count.textContent = comptePanier === null ? 0 : comptePanier.length

console.log(comptePanier);

boutton.addEventListener("click", (e) => {
    const enfant = e.target
    let letParent = enfant.closest(".card-image");
    const nom = document.querySelector(".nom").textContent;
    const prix = document.querySelector(".prix").textContent;
    let image = document.querySelector(".image").src;
    
    let panier = localStorage.panier?JSON.parse(localStorage.panier) : [];
    const tailpaniert = panier.length;
    
    const article = {
        id: tailpaniert+1,
        nom: nom,
        prix: prix,
        image: image,
    };

    panier.push(article);
    localStorage.setItem("panier", JSON.stringify(panier));
    count.textContent = panier.length<=5?panier.length:"+5";
});

const showPanier = (balise) => {
    const npanier = localStorage.panier ?JSON.parse(localStorage.panier).length : 0;
    balise.textContent = npanier<=5 ? npanier : "+5";
}
showPanier(count)
