const admin = [
    {
        email: "admin@gmail.com",
        motDePasse: "admin"
    }
]
localStorage.setItem("dataAdmin", JSON.stringify(admin))

let boutton = document.querySelector("")
let formulaire = document.querySelector("")
formulaire .addEventListener("submit", (e) =>{
    e.preventDefault();
    let dataAdmin = JSON.parse(localStorage.dataAdmin)
    let result ;
    let verifAdmin;
    
    // RECHERCHE  ET VERIF DE ADMIN 
    dataAdmin.forEach((admin) => {
        if (document.querySelector("#adresseMail").value === admin.email && document.querySelector("#motDePasse").value === admin.motDePasse){
            verifAdmin = admin
            console.log(verifAdmin);
        }
    });

    if (typeof verifAdmin === 'object') {
        window.location.replace("./../htmldoc/dashboard.html");
    } else if (typeof result === "object") {
        localStorage.setItem("session", JSON.stringify(result))
        window.location.replace("./../htmldoc/connecter.html");
    }else{
        alert("introuvable")
        window.location.reload()
    }

})