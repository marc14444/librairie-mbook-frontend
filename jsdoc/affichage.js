let AfficheInfo= JSON.parse(localStorage.session)
let profil = document.querySelector("#affich")
profil.innerText= AfficheInfo.prenom
profil.style.color = "#fff"