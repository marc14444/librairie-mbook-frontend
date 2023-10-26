let formulaire = document.querySelector(".formulaire")
formulaire.addEventListener("submit", event =>{
    event.preventDefault();
    let email = event.target.email
    let motDePasse = event.target.motDePasse

    const formData = new FormData();

  
    formData.append("email", email.value);
    formData.append("motDePasse", motDePasse.value);

    fetch('http://localhost:3000/api/user/login',{ 
        method:"POST",
        //on cree une instance de la classe URLSeachParams qui recupere les informations contenue dans forme data
        body: new URLSearchParams(formData)
    })
    .then(res => res.json())
    .then(succes => {
        console.log(succes);

        if(succes.statut == true){
            alert("vous êtes bien connecter");
            window.location.href = "./connecter.html";
        }
        console.log(succes);
    })
});