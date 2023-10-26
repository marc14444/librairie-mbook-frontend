let formulaire = document.querySelector(".formulaire")
formulaire.addEventListener("submit", event =>{
    event.preventDefault();
    let name = event.target.name;
    let prenom = event.target.prenom
    let email = event.target.email
    let motDePasse = event.target.motDePasse

    const formData = new FormData();

    formData.append("name", name.value);
   formData.append("prenom", prenom.value);
    formData.append("email", email.value);
    formData.append("motDePasse", motDePasse.value);

    fetch('http://localhost:3000/api/user',{ 
        method:"POST",
        //on cree une instance de la classe URLSeachParams qui recupere les informations contenue dans forme data
        body: new URLSearchParams(formData)
    })
    .then(res => res.json())
    .then(succes => {
        if(succes.statut ){
            alert("vous êtes bien inscrit");
            window.location.href = "./connexion.html";
        }
    })
});

