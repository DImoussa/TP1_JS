let nbAleatoire = Math.floor(Math.random() * 11);
let text = document.getElementById("texte");
const Dprincipal = document.getElementById("contentDuTp");
let coup = 3;

function jeuDevinette () {
    let proposition = prompt("Veuillez entrer un nombre entre 0 et 10");

    if (Number(proposition) === nbAleatoire) {
        text.textContent = "Bravo vous avez trouvé le nombre était " + nbAleatoire;
        document.getElementById("contentDuTp").style.backgroundColor = "green";
    }
    else if (!Number(proposition)){
        alert("Veuillez entrer un nombre")
    }
    else if (Number(proposition) > 10) {
        text.textContent = "Veuillez ressayer en entrant un nombre entre 0 et 10";
        document.getElementById("contentDuTp").style.backgroundColor = "white";
    } else if (Number(proposition) < 0) {
        text.textContent = "Veuillez ressayer en entrant un nombre entre 0 et 10";
        document.getElementById("contentDuTp").style.backgroundColor = "white";
    } else if (Number(proposition) < nbAleatoire) {
        coup--
        text.textContent = "Trop petit ! Ressaye encore il vous reste " + coup + " coup";
        document.getElementById("contentDuTp").style.backgroundColor = "red";
    } else{
        coup--
        text.textContent = "Trop grand ! Ressaye encore il vous reste " + coup + " coup";
        document.getElementById("contentDuTp").style.backgroundColor = "red";
    }

    if (coup === 0) {
        text.textContent = "Vous avez perdu";
        coup = 3;

    }

}
Dprincipal.addEventListener('click',jeuDevinette)